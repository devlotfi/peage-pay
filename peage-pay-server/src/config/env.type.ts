import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class Env {
  @IsNumber()
  public PORT: number;

  @IsString()
  public WEB_CLIENT_URL: string;

  @IsString()
  public DATABASE_URL: string;

  @IsString()
  public SHADOW_DATABASE_URL: string;

  @IsString()
  public REDIS_USERNAME: string;

  @IsString()
  public REDIS_PASSWORD: string;

  @IsString()
  public REDIS_HOST: string;

  @IsNumber()
  public REDIS_PORT: number;

  @IsString()
  public SMTP_HOST: string;

  @IsString()
  public SMTP_USER: string;

  @IsString()
  public SMTP_PASSWORD: string;

  @IsNumber()
  public SMTP_PORT: number;

  @IsBoolean()
  public SMTP_SECURE: boolean;
}
