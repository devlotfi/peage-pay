import { PageError } from '@peage-pay-web/assets';
import { MinimalNavbar } from '@peage-pay-web/ui';

const PermissionErrorPage = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen w-screen bg-base-200">
      <MinimalNavbar>
        <MinimalNavbar.LeftContent></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col">
          <img
            className="h-[15rem] mb-[1rem]"
            src={PageError}
            alt="Permission error"
          />
          <div className="flex text-[15pt]">
            Insufficient permissions to access the app
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionErrorPage;
