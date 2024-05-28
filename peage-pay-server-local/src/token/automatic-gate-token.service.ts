import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from 'src/database/database.service';
import { Utils } from 'src/shared/utils';
import { Env } from 'src/shared/config/env.type';
import { AutomaticGateRefreshTokenPayload } from 'src/automatic-gate/types/automatic-gate-refresh-token-payload.type';
import { AutomaticGateAccessTokenPayload } from 'src/automatic-gate/types/automatic-gate-access-token-payload.type';

@Injectable()
export class AutomaticGateTokenService {
  public constructor(
    private readonly configService: ConfigService<Env>,
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  public async generateRefreshToken(automaticGateId: string): Promise<string> {
    const refreshToken = await this.jwtService.signAsync(
      { automaticGateId: automaticGateId },
      {
        expiresIn: '30d',
        secret: this.configService.getOrThrow<string>(
          'AUTOMATIC_GATE_JWT_REFRESH_TOKEN_SECRET',
        ),
      },
    );

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    await this.databaseService.$transaction(async (prisma) => {
      await prisma.automaticGateRefreshToken.deleteMany({
        where: {
          automaticGate: {
            id: automaticGateId,
          },
        },
      });
      await prisma.automaticGateRefreshToken.create({
        data: {
          tokenHash: await Utils.hashStringStatic(refreshToken),
          expiresAt: expirationDate,
          automaticGate: {
            connect: {
              id: automaticGateId,
            },
          },
        },
      });
    });

    return refreshToken;
  }

  public async clearRefreshToken(automaticGateId: string): Promise<void> {
    try {
      await this.databaseService.automaticGateRefreshToken.delete({
        where: {
          automaticGateId,
        },
      });
    } catch (error) {}
  }

  public async generateAccessToken(automaticGateId: string): Promise<string> {
    const accessToken = await this.jwtService.signAsync(
      {
        automaticGateId,
      },
      {
        secret: this.configService.getOrThrow<string>(
          'AUTOMATIC_GATE_JWT_ACCESS_TOKEN_SECRET',
        ),
        expiresIn: '1min',
      },
    );

    return accessToken;
  }

  public async checkRefreshToken(refreshToken: string) {
    let valid = true;
    let payload: AutomaticGateRefreshTokenPayload | undefined;
    if (refreshToken) {
      try {
        payload =
          await this.jwtService.verifyAsync<AutomaticGateRefreshTokenPayload>(
            refreshToken,
            {
              secret: this.configService.getOrThrow<string>(
                'AUTOMATIC_GATE_JWT_REFRESH_TOKEN_SECRET',
              ),
            },
          );
      } catch (error) {
        valid = false;
      }
    }

    return {
      payload,
      valid,
    };
  }

  public async checkAccessToken(accessToken: string) {
    let valid = true;
    let payload: AutomaticGateAccessTokenPayload | undefined;
    if (accessToken) {
      try {
        payload =
          await this.jwtService.verifyAsync<AutomaticGateAccessTokenPayload>(
            accessToken,
            {
              secret: this.configService.getOrThrow<string>(
                'AUTOMATIC_GATE_JWT_ACCESS_TOKEN_SECRET',
              ),
            },
          );
      } catch (error) {
        valid = false;
      }
    }

    return {
      payload,
      valid,
    };
  }
}
