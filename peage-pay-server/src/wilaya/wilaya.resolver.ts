import { Args, Query, Resolver } from '@nestjs/graphql';
import { WilayaType } from './graphql/wilaya.gql';
import { WilayaService } from './wilaya.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { WilayaListInput } from './input/wilaya-list.input.gql';
import { WilayaListResult } from './result/wilaya-list.result.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Resolver(() => WilayaType)
export class WilayaResolver {
  public constructor(private readonly wilayaService: WilayaService) {}

  @Query(() => WilayaListResult)
  @UseGuards(AuthGuard)
  public async wilayaList(
    @Args('wilayaListInput') wilayaListInput: WilayaListInput,
  ) {
    return await this.wilayaService.wilayaList(wilayaListInput);
  }

  @Query(() => WilayaType)
  @UseGuards(AuthGuard)
  public async wilayaById(@Args('wilayaByIdInput') wilayaByIdInput: IdInput) {
    return await this.wilayaService.wilayaById(wilayaByIdInput);
  }
}
