import { PropsWithChildren, createContext, useContext } from 'react';
import { TollAdminType } from '../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { TOLL_ADMIN_INFO } from '../graphql/queries';
import { AdminDashboardLayout, FullScreenLoading } from '@peage-pay-web/ui';
import { AuthContext, TollNotAssignedErrorPage } from '@peage-pay-web/auth';

interface TollAdminInfoConext {
  tollAdmin: TollAdminType;
}

const initialValue: TollAdminInfoConext = {
  tollAdmin: null!,
};

export const TollAdminInfoConext = createContext(initialValue);

export const TollAdminInfoProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const { authData } = useContext(AuthContext);
  const { loading, error, data } = useQuery(TOLL_ADMIN_INFO, {
    fetchPolicy: 'network-only',
    skip: !authData,
  });

  if (!authData) {
    return <>{children}</>;
  }

  if (loading) {
    return <FullScreenLoading></FullScreenLoading>;
  }

  if (error) {
    return (
      <AdminDashboardLayout.Error error={error}></AdminDashboardLayout.Error>
    );
  }

  if (!data?.tollAdminInfo?.toll) {
    return <TollNotAssignedErrorPage></TollNotAssignedErrorPage>;
  }

  return (
    <TollAdminInfoConext.Provider
      value={{ tollAdmin: data.tollAdminInfo as TollAdminType }}
    >
      {children}
    </TollAdminInfoConext.Provider>
  );
};
