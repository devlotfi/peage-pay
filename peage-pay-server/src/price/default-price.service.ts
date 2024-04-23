import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { EditDefaultPriceInput } from './input/edit-default-price.input.gql';
import { RedisService } from 'src/redis/redis.service';
import { PriceRedisPrefixes } from './price-redis-prefixes';

@Injectable()
export class DefaultPriceService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly redisService: RedisService,
  ) {}

  public async defaultPrice(): Promise<number> {
    const cacheResult = await this.redisService.client.get(
      PriceRedisPrefixes.defaultPrice(),
    );
    if (cacheResult) {
      return +cacheResult;
    }

    const defaultPrice =
      await this.databaseService.defaultPrice.findFirstOrThrow();
    return defaultPrice.value.toNumber();
  }

  public async editDefaultPrice(
    editDefaultPriceInput: EditDefaultPriceInput,
  ): Promise<boolean> {
    return this.databaseService.$transaction(async (prisma) => {
      await prisma.defaultPrice.deleteMany();
      await prisma.defaultPrice.create({
        data: {
          value: editDefaultPriceInput.value,
        },
      });
      await this.redisService.client.set(
        PriceRedisPrefixes.defaultPrice(),
        editDefaultPriceInput.value,
        {
          EX: 60 * 60 * 24,
        },
      );
      return true;
    });
  }
}
