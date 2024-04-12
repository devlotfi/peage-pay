import { Controller, Get } from '@nestjs/common';

@Controller()
export class PaymentController {
  @Get('webhook')
  public handleWebHook() {
    return 'Hello world';
  }
}
