import { Args, Query, Resolver } from '@nestjs/graphql';
import { WilayaType } from './graphql/wilaya.gql';
import { WilayaService } from './wilaya.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { WilayaListInput } from './input/wilaya-list.input.gql';
import { WilayaByIdInput } from './input/wilaya-by-id.input.gql';

@Resolver(() => WilayaType)
export class WilayaResolver {
  public constructor(private readonly wilayaService: WilayaService) {}

  @Query(() => [WilayaType])
  @UseGuards(AuthGuard)
  public async wilayaList(
    @Args('wilayaListInput') wilayaListInput: WilayaListInput,
  ): Promise<WilayaType[]> {
    return await this.wilayaService.wilayaList(wilayaListInput);
  }

  @Query(() => WilayaType)
  @UseGuards(AuthGuard)
  public async wilayaById(
    @Args('wilayaByIdInput') wilayaByIdInput: WilayaByIdInput,
  ): Promise<WilayaType> {
    return (await this.wilayaService.wilayaById(wilayaByIdInput)) as any;
  }
}
