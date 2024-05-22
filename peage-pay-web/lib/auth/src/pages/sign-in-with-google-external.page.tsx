import { faCheck, faClipboard, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Google } from '@peage-pay-web/assets';
import { Button, MinimalNavbar, TextInput } from '@peage-pay-web/ui';
import { useGoogleLogin } from '@react-oauth/google';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const SignInWithGoogleExternalPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const googleLogin = useGoogleLogin({
    onSuccess(tokenResponse) {
      setAccessToken(tokenResponse.access_token);
    },
  });

  const copyToClipboard = () => {
    if (accessToken) {
      navigator.clipboard.writeText(accessToken);
      setCopied(true);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-base-200">
      <MinimalNavbar>
        <MinimalNavbar.LeftContent title="PeagePay"></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <div className="flex h-full flex-col justify-center items-center">
        <div className="flex flex-col rounded-xl border-edge-200 border-[1px] bg-base-100 p-[1rem] w-[90%] lg:w-full max-w-[30rem]">
          {accessToken ? (
            <TextInput>
              <TextInput.Main>
                <TextInput.Label>{t('TOKEN')}</TextInput.Label>
                <TextInput.Icon position="left">
                  <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                </TextInput.Icon>
                <TextInput.Field
                  fieldRef={inputRef}
                  value={accessToken}
                  readOnly
                ></TextInput.Field>
                <TextInput.Icon position="right">
                  {copied ? (
                    <Button
                      onClick={copyToClipboard}
                      variant="success"
                      className="min-h-[1.8rem] items-center justify-center"
                    >
                      <Button.Icon className="text-[12pt]" position={'left'}>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                      </Button.Icon>
                      <Button.Content>{t('COPIED')}</Button.Content>
                    </Button>
                  ) : (
                    <Button
                      onClick={copyToClipboard}
                      variant="primary"
                      className="min-h-[1.8rem] items-center justify-center"
                    >
                      <Button.Icon className="text-[12pt]" position={'left'}>
                        <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
                      </Button.Icon>
                      <Button.Content>{t('COPY')}</Button.Content>
                    </Button>
                  )}
                </TextInput.Icon>
              </TextInput.Main>
            </TextInput>
          ) : (
            <Button
              onClick={() => googleLogin()}
              className="w-full"
              variant={'base-200'}
            >
              <Button.Icon position={'left'}>
                <img src={Google} alt="" />
              </Button.Icon>
              <Button.Content>{t('SIGN_IN_WITH_GOOGLE')}</Button.Content>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInWithGoogleExternalPage;
