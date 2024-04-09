import { PropsWithChildren, createContext, useState } from 'react';

interface AccessTokenContext {
  accessToken: string | null;

  setAccessToken: (accessToken: string | null) => void;
}

const initialValue: AccessTokenContext = {
  accessToken: null,
  setAccessToken: () => {},
};

export const AccessTokenContext = createContext(initialValue);

export const AccessTokenProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};
