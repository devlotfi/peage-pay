import { LoaderDots } from '@peage-pay-web/ui';
import { PeagePayLogo } from '@peage-pay-web/assets';

const AuthLoading = (): JSX.Element => {
  return (
    <div className="flex fixed h-screen w-screen bg-base-100 justify-center items-center">
      <div className="flex flex-col">
        <img className="h-[4.3rem] mb-[1rem]" src={PeagePayLogo} alt="" />
        <LoaderDots
          dotProps={{ variant: 'primary', style: { height: 17, width: 17 } }}
        ></LoaderDots>
      </div>
    </div>
  );
};

export default AuthLoading;
