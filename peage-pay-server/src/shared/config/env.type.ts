import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class Env {
  @IsNumber()
  public PORT: number;

  @IsString()
  public AUTH_COMMON_CLIENT_URL: string;

  @IsString()
  public DATABASE_URL: string;

  @IsString()
  public SHADOW_DATABASE_URL: string;

  @IsString()
  public REDIS_URL: string;

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

  @IsString()
  public TWILIO_ACCOUNT: string;

  @IsString()
  public TWILIO_AUTH_TOKEN: string;

  @IsString()
  public USER_JWT_REFRESH_TOKEN_SECRET: string;

  @IsString()
  public USER_JWT_ACCESS_TOKEN_SECRET: string;

  @IsString()
  public AUTOMATIC_GATE_JWT_REFRESH_TOKEN_SECRET: string;

  @IsString()
  public AUTOMATIC_GATE_JWT_ACCESS_TOKEN_SECRET: string;

  @IsString()
  public GOOGLE_OAUTH_CLIENT_ID: string;

  @IsString()
  public GOOGLE_OAUTH_CLIENT_SECRET: string;

  @IsString()
  public CHARGILY_PAY_PUBLIC_KEY: string;

  @IsString()
  public CHARGILY_PAY_SECRET_KEY: string;

  @IsString()
  public CHARGILY_WEBHOOK_URL: string;
}
