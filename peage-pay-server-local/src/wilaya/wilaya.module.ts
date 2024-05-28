import { Module } from '@nestjs/common';
import { WilayaService } from './wilaya.service';
import { WilayaResolver } from './wilaya.resolver';

@Module({
  providers: [WilayaService, WilayaResolver],
  exports: [WilayaService],
})
export class WilayaModule {}
