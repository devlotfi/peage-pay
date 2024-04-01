import { PageError } from '@peage-pay-web/assets';
import { Button, LoaderDots, MinimalNavbar } from '@peage-pay-web/ui';
import { SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE } from '../graphql/mutations';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const TollNotAssignedErrorPage = (): JSX.Element => {
  const { setAuthData, clearAccessToken } = useContext(AuthContext);
  const [signOutWithRefreshTokenCookie, { loading }] = useMutation(
    SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE,
    {
      onCompleted() {
        setAuthData(null);
        clearAccessToken();
      },
      onError(error) {
        console.log(error);
        setAuthData(null);
      },
    },
  );

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
          <div className="flex text-[15pt]">Toll not assigned</div>
          <Button
            className="mt-[1rem]"
            onClick={() => signOutWithRefreshTokenCookie()}
            variant={'error'}
          >
            {loading ? (
              <Button.Content>
                <LoaderDots
                  dotProps={{ variant: 'color-content' }}
                ></LoaderDots>
              </Button.Content>
            ) : (
              <>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Sign out</Button.Content>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TollNotAssignedErrorPage;
