import { ButtonOutline, Heading, MinimalNavbar } from '@peage-pay-web/ui';
import { BaseHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePen,
  faSignIn,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import { Toll } from '@peage-pay-web/assets';
import { Link } from 'react-router-dom';
import SignUpWithEmailForm from '../components/sign-up/sign-up-with-email-form.component';
import { cva, VariantProps } from 'class-variance-authority';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

const signUpPageVariants = cva(
  'flex flex-col bg-base-200 min-h-screen bg-cover',
  {
    variants: {
      usage: {
        desktop: 'min-h-[cacl(100vh-2.5rem)] flex-1 overflow-y-auto',
      },
    },
  },
);

interface SignUpPageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof signUpPageVariants> {
  title: string;
}

const SignUpPage = ({
  title,
  className,
  usage,
  ...props
}: SignUpPageProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div
      className={Utils.cn(signUpPageVariants({ className, usage }))}
      {...props}
    >
      <MinimalNavbar>
        <MinimalNavbar.LeftContent title={title}></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <div className="flex flex-1 justify-center mt-0 lg:m-0 lg:items-center">
        <div className="flex w-full mb-[5rem] p-[1rem] lg:p-[1.5rem] lg:max-w-[55rem] bg-base-100 rounded-none lg:rounded-xl flex-col-reverse justify-end lg:flex-row border-[0px] lg:border-[1px] border-edge-200">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              <Heading className="text-[23pt] mb-[1rem] justify-center">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>{t('SIGN_UP')}</Heading.Text>
              </Heading>
              <SignUpWithEmailForm></SignUpWithEmailForm>
              <div className="flex bg-edge-100 h-[1px] my-[1.5rem] justify-center relative">
                <div className="flex bg-base-100 rounded-full justify-center items-center h-[2.3rem] w-[2.3rem] absolute translate-y-[-50%]">
                  {t('OR')}
                </div>
              </div>
              <Link to={'/sign-in'} className="flex w-full">
                <ButtonOutline className="flex w-full" variant={'primary'}>
                  <ButtonOutline.Icon position={'left'}>
                    <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                  </ButtonOutline.Icon>
                  <ButtonOutline.Content>{t('SIGN_IN')}</ButtonOutline.Content>
                </ButtonOutline>
              </Link>
            </div>
          </div>
          <div className="bg-edge-100 w-[1px] my-[1rem] mx-[1.5rem] hidden lg:flex"></div>
          <div className="flex flex-col">
            <div className="flex text-[17pt] items-center">
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

export default SignUpPage;
