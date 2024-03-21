import { NotFound } from '@peage-pay-web/assets';
import { MinimalNavbar } from '@peage-pay-web/ui';
import { useRouteError } from 'react-router-dom';

const ErrorPage = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="h-screen w-screen flex flex-col bg-base-200">
      <MinimalNavbar>
        <MinimalNavbar.LeftContent></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <div className="flex flex-col bg-base-200 h-full justify-center items-center">
        {error.status === 404 ? (
          <>
            <img className="max-h-[13rem] mb-[2rem]" src={NotFound} alt="404" />
            <div className="flex text-[20pt]">
              Sorry, an unexpected error has occurred.
            </div>
            <div className="flex text-[17pt] text-primary-100">
              {error.status}
            </div>
          </>
        ) : (
          <>
            <div className="flex">
              Sorry, an unexpected error has occurred. {error.message}
            </div>
            <div className="flex">{error.status}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
