import { Injectable } from '@nestjs/common';
import { SignUpWithPhoneInput } from './input/sign-up-with-phone.input';
import { SignUpWithPhoneResult } from './result/sign-up-with-phone.result';
import { SmsService } from 'src/sms/sms.service';
import { Twilio } from 'twilio';

@Injectable()
export class PhoneAuthService {
  public constructor(private readonly smsService: SmsService) {}

  public async signUpWithPhone(
    signUpWithPhoneInput: SignUpWithPhoneInput,
  ): Promise<SignUpWithPhoneResult> {
    /* await this.smsService.sendVerificationSms(
      'lol',
      signUpWithPhoneInput.phoneNumber,
    ); */
    const client = new Twilio(
      'ACcd71e77c9a28b797fc08b18682445090',
      '3adfd754cd48d021a0a2bbb5f4239459',
    );
    await client.verify.v2
      .services('VAd001785e204070c08a6368ae0618b5f5')
      .verifications.create({
        to: `+213542687187`,
        channel: 'sms',
      });
    const signUpWithPhoneResult = new SignUpWithPhoneResult();
    signUpWithPhoneResult.userId = 'lol';
    return signUpWithPhoneResult;
  }
}
