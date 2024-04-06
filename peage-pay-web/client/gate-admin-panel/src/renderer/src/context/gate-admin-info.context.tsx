import { PropsWithChildren, createContext, useContext } from 'react';
import { GateAdminType } from '../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { AdminDashboardLayout, FullScreenLoading } from '@peage-pay-web/ui';
import { AuthContext, TollNotAssignedErrorPage } from '@peage-pay-web/auth';
import { GATE_ADMIN_INFO } from '@renderer/graphql/queries';

interface GateAdminInfoConext {
  gateAdmin: GateAdminType;
}

const initialValue: GateAdminInfoConext = {
  gateAdmin: null!,
};

export const GateAdminInfoConext = createContext(initialValue);

export const GateAdminInfoProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const { authData } = useContext(AuthContext);
  const { loading, error, data } = useQuery(GATE_ADMIN_INFO, {
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

  if (!data?.gateAdminInfo?.toll) {
    return <TollNotAssignedErrorPage></TollNotAssignedErrorPage>;
  }

  return (
    <GateAdminInfoConext.Provider
      value={{ gateAdmin: data.gateAdminInfo as GateAdminType }}
    >
      {children}
    </GateAdminInfoConext.Provider>
  );
};
