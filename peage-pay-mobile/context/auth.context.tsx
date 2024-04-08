import { PropsWithChildren, createContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type AuthData = {} | null;

interface AuthContext {
  authData: AuthData | null;

  setAuthData: (authData: AuthData | null) => void;
}

const initialValue: AuthContext = {
  authData: null,
  setAuthData: () => {},
};

export const AuthContext = createContext(initialValue);

export const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [authData, setAuthData] = useState<AuthData | null>(null);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
