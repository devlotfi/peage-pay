import { SignInLayout } from '@peage-pay-web/admin-ui';
import { Heading, MinimalNavbar } from '@peage-pay-web/ui';
import SignInPageTabs, {
  SignInTabsEnum,
} from '../components/sign-in-page-tabs.component';
import { useState } from 'react';
import SignInWithEmailForm from '../components/sign-in-with-email-form.component';
import SignInWithGoogleForm from '../components/sign-in-with-google-form.component';
import SignInWithPhoneForm from '../components/sign-in-with-phone-form.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

const SignInPage = (): JSX.Element => {
  const [tab, setTab] = useState<SignInTabsEnum>(SignInTabsEnum.EMAIL);

  const renderTabContent = () => {
    switch (tab) {
      case SignInTabsEnum.EMAIL:
        return <SignInWithEmailForm></SignInWithEmailForm>;
      case SignInTabsEnum.GOOGLE:
        return <SignInWithGoogleForm></SignInWithGoogleForm>;
      case SignInTabsEnum.PHONE:
        return <SignInWithPhoneForm></SignInWithPhoneForm>;
    }
  };

  return (
    <SignInLayout>
      <MinimalNavbar>
        <MinimalNavbar.LeftContent></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <SignInLayout.Main>
        <SignInLayout.Card
          header={
            <SignInLayout.Card.Header>
              General administration
            </SignInLayout.Card.Header>
          }
        >
          <div className="flex flex-col w-full">
            <Heading className="text-[27pt] mb-[1rem]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Sign in</Heading.Text>
            </Heading>
            <SignInPageTabs
              value={tab}
              onChange={(value) => setTab(value)}
            ></SignInPageTabs>
            {renderTabContent()}
          </div>
        </SignInLayout.Card>
      </SignInLayout.Main>
    </SignInLayout>
  );
};

export default SignInPage;
