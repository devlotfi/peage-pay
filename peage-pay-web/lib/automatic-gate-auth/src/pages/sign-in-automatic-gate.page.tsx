import { Heading, MinimalNavbar } from '@peage-pay-web/ui';
import SignInAutomaticGateForm from '../components/sign-in-automatic-gate-form.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { Toll } from '@peage-pay-web/assets';
import { cva, VariantProps } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

const signInAutomaticGateVariants = cva(
  'flex flex-col bg-base-200 min-h-screen bg-cover text-base-content',
  {
    variants: {
      usage: {
        desktop: 'min-h-[cacl(100vh-2.5rem)] flex-1 overflow-y-auto',
      },
    },
  },
);

interface SignInAutomaticGatePageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof signInAutomaticGateVariants> {
  title: string;
}

const SignInAutomaticGatePage = ({
  title,
  className,
  usage,
  ...props
}: SignInAutomaticGatePageProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div
      className={Utils.cn(signInAutomaticGateVariants({ className, usage }))}
      {...props}
    >
      <MinimalNavbar>
        <MinimalNavbar.LeftContent></MinimalNavbar.LeftContent>
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
              <SignInAutomaticGateForm></SignInAutomaticGateForm>
            </div>
          </div>
          <div className="bg-edge-100 w-[1px] my-[1rem] mx-[1.5rem] hidden lg:flex"></div>
          <div className="flex flex-col">
            <div className="flex justify-between text-[17pt] items-center">
              <div className="flex mr-[1.5rem]">{t('PEAGE_PAY_GATES')}</div>
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

export default SignInAutomaticGatePage;
