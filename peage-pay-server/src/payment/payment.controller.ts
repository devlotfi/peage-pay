import { Body, Controller, Get } from '@nestjs/common';

@Controller()
export class PaymentController {
  @Get('webhook')
  public handleWebHook(@Body() body: any) {
    console.log(JSON.stringify(body));

    return 'Hello world';
  }
}
