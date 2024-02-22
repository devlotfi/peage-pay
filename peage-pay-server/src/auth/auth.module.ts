import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [DatabaseModule, EmailModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
