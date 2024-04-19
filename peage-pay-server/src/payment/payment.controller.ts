import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { PaymentService } from './payment.service';

@Controller()
export class PaymentController {
  public constructor(private readonly paymentService: PaymentService) {}

  @Post('webhook')
  public async handleWebHook(@Body() body: any, @Req() req: Request) {
    return await this.paymentService.handleWebHook(body, req);
  }
}
