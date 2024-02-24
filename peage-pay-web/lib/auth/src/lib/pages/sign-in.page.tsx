import { SignInLayout } from '@peage-pay-web/admin-ui';
import { MinimalNavbar } from '@peage-pay-web/ui';
import SignInPageTabs from '../components/sign-in-page-tabs.component';

const SignInPage = (): JSX.Element => {
  return (
    <SignInLayout>
      <MinimalNavbar>
        <MinimalNavbar.LeftContent></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <SignInLayout.Main>
        <SignInLayout.Card>
          <div className="flex flex-col w-[90%]">
            <div className="flex mt-[1.5rem] text-[25pt] font-semibold">
              Sign in
            </div>
            <div className="flex text-[13pt] mb-[1rem]">
              General administration
            </div>
            <SignInPageTabs></SignInPageTabs>
          </div>
        </SignInLayout.Card>
        <SignInLayout.Drawing></SignInLayout.Drawing>
      </SignInLayout.Main>
    </SignInLayout>
  );
};

export default SignInPage;
