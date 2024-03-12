import { Query, Resolver } from '@nestjs/graphql';
import { WilayaType } from './graphql/wilaya.gql';
import { WilayaService } from './wilaya.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => WilayaType)
export class WilayaResolver {
  public constructor(private readonly wilayaService: WilayaService) {}

  @Query(() => [WilayaType])
  @UseGuards(AuthGuard)
  public async wilayaList(): Promise<WilayaType[]> {
    return await this.wilayaService.wilayaList();
  }
}
