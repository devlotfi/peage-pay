import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import FullScreenLoading from '../layout/full-screen-loading.component';
import NetworkConfigForm from '../components/network-config-form.component';

interface NetConnectionContext {
  state: NetInfoState | null;
}

const initialValue: NetConnectionContext = {
  state: null,
};

export const NetConnectionContext = createContext(initialValue);

export const NetConnectionProvider = ({ children }: PropsWithChildren) => {
  const [netState, setNetState] = useState<NetInfoState | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    NetInfo.fetch().then((value) => {
      setNetState(value);
      setLoading(false);
    });
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetState(state);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <FullScreenLoading></FullScreenLoading>;
  }

  if (netState && !netState.isConnected) {
    return <NetworkConfigForm></NetworkConfigForm>;
  }

  return (
    <NetConnectionContext.Provider value={{ state: netState }}>
      {children}
    </NetConnectionContext.Provider>
  );
};
