import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class PaymentController {
  @Post('webhook')
  public handleWebHook(@Body() body: any) {
    console.log(JSON.stringify(body));

    return 'Hello world';
  }
}
