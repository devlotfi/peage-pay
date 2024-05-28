import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionResolver } from './section.resolver';
import { TollModule } from 'src/toll/toll.module';

@Module({
  imports: [TollModule],
  providers: [SectionService, SectionResolver],
  exports: [SectionService],
})
export class SectionModule {}
