import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class Env {
  @IsNumber()
  public PORT: number;

  @IsString()
  public GENERAL_ADMIN_PANEL_URL: string;
  @IsString()
  public HUMAN_RESSOURCES_PANEL_URL: string;
  @IsString()
  public TOLL_ADMIN_PANEL_URL: string;
  @IsString()
  public GATE_ADMIN_PANEL_URL: string;
  @IsString()
  public MODERATOR_ADMIN_PANEL_URL: string;
  @IsString()
  public AUTH_COMMON_CLIENT_URL: string;

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

  @IsString()
  public TWILIO_ACCOUNT: string;

  @IsString()
  public TWILIO_AUTH_TOKEN: string;

  @IsString()
  public JWT_REFRESH_TOKEN_SECRET: string;

  @IsString()
  public JWT_ACCESS_TOKEN_SECRET: string;

  @IsString()
  public GOOGLE_OAUTH_CLIENT_ID: string;

  @IsString()
  public GOOGLE_OAUTH_CLIENT_SECRET: string;
}
