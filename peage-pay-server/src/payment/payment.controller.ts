import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class PaymentController {
  @Post('webhook')
  public handleWebHook(@Body() body: any, @Req() req: Request) {
    console.log(JSON.stringify(body));
    console.log(req.get('signature'));

    return 'Hello world';
  }
}
