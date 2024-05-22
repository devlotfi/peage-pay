import { ButtonOutline, Heading, MinimalNavbar } from '@peage-pay-web/ui';
import SignInPageTabs, {
  SignInTabsEnum,
} from '../components/sign-in/sign-in-page-tabs.component';
import { BaseHTMLAttributes, useState } from 'react';
import SignInWithEmailForm from '../components/sign-in/sign-in-with-email-form.component';
import SignInWithGoogleForm from '../components/sign-in/sign-in-with-google-form.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePen,
  faSignIn,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import { Toll } from '@peage-pay-web/assets';
import { Link } from 'react-router-dom';
import SignInWithGoogleFormExternal from '../components/sign-in/sign-in-with-google-form-external.component';
import GoogleOAuthWrapper from '../components/google-oauth-wrapper.component';
import { VariantProps, cva } from 'class-variance-authority';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

const signInPageVariants = cva(
  'flex flex-col bg-base-200 min-h-screen bg-cover',
  {
    variants: {
      usage: {
        desktop: 'min-h-[cacl(100vh-2.5rem)] flex-1 overflow-y-auto',
      },
    },
  },
);

interface SignInPageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof signInPageVariants> {
  title: string;
  googleExternalSignInUrl?: string;
}

const SignInPage = ({
  title,
  googleExternalSignInUrl,
  className,
  usage,
  ...props
}: SignInPageProps): JSX.Element => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<SignInTabsEnum>(SignInTabsEnum.EMAIL);

  const renderTabContent = () => {
    switch (tab) {
      case SignInTabsEnum.EMAIL:
        return <SignInWithEmailForm></SignInWithEmailForm>;
      case SignInTabsEnum.GOOGLE:
        if (googleExternalSignInUrl) {
          return (
            <SignInWithGoogleFormExternal
              url={googleExternalSignInUrl}
            ></SignInWithGoogleFormExternal>
          );
        } else {
          return (
            <GoogleOAuthWrapper>
              <SignInWithGoogleForm></SignInWithGoogleForm>
            </GoogleOAuthWrapper>
          );
        }
    }
  };

  return (
    <div
      className={Utils.cn(signInPageVariants({ className, usage }))}
      {...props}
    >
      <MinimalNavbar>
        <MinimalNavbar.LeftContent title="PeagePay Admin"></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <div className="flex flex-1 justify-center mt-0 lg:m-0 md:items-center">
        <div className="flex w-full md:w-[80%] md:mb-[5rem] p-[1rem] md:p-[1.5rem] md:max-w-[55rem] bg-base-100 rounded-none md:rounded-xl flex-col-reverse justify-end lg:flex-row border-[0px] md:border-[1px] border-edge-200">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              <Heading className="text-[27pt] lg:text-[23pt] mb-[1rem] flex justify-center">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>{t('SIGN_IN')}</Heading.Text>
              </Heading>
              <SignInPageTabs
                value={tab}
                onChange={(value) => setTab(value)}
              ></SignInPageTabs>
              {renderTabContent()}
            </div>
            <div className="flex bg-edge-100 h-[1px] my-[1.5rem] justify-center relative">
              <div className="flex bg-base-100 rounded-full justify-center items-center h-[2.3rem] w-[2.3rem] absolute translate-y-[-50%]">
                {t('OR')}
              </div>
            </div>
            <Link to={'/sign-up'} className="flex w-full">
              <ButtonOutline className="flex w-full" variant={'primary'}>
                <ButtonOutline.Icon position={'left'}>
                  <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
                </ButtonOutline.Icon>
                <ButtonOutline.Content>{t('SIGN_UP')}</ButtonOutline.Content>
              </ButtonOutline>
            </Link>
          </div>
          <div className="bg-edge-100 w-[1px] my-[1rem] mx-[1.5rem] hidden lg:flex"></div>
          <div className="flex flex-col">
            <div className="flex justify-between text-[17pt] items-center">
              <div className="flex mr-[1.5rem]">
                {t('PEAGE_PAY_ADMINISTRATION')}
              </div>
              <FontAwesomeIcon
                className="text-[25pt] text-primary-100"
                icon={faUserGear}
              ></FontAwesomeIcon>
            </div>
            <div className="flex text-[13pt] opacity-70 lg:mt-[0.7rem]">
              {title}
            </div>
            <img
              className="hidden lg:flex max-h-[20rem]"
              src={Toll}
              alt="toll"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
