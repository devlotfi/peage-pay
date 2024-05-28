import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Env } from './env.type';

export function validateEnv(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(Env, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
