import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { EditDefaultPriceInput } from './input/edit-default-price.input.gql';

@Injectable()
export class DefaultPriceService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async defaultPrice(): Promise<number | null> {
    const defaultPrice = await this.databaseService.defaultPrice.findFirst();

    if (defaultPrice) {
      return defaultPrice.value.toNumber();
    }
    return null;
  }

  public async editDefaultPrice(
    editDefaultPriceInput: EditDefaultPriceInput,
  ): Promise<boolean> {
    return this.databaseService.$transaction(async (prisma) => {
      await prisma.defaultPrice.deleteMany();
      await prisma.defaultPrice.create({
        data: {
          value: editDefaultPriceInput.value,
        },
      });
      return true;
    });
  }
}
