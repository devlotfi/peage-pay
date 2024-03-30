
import { PropsWithChildren, createContext, useState } from 'react';

interface BadgeScannerContext {
  path: string | null;
  rfid: string | null;
  setPath: (value: string | null) => void;
  setRfid: (value: string | null) => void;
}

const initialValue: BadgeScannerContext = {
  path: null,
  rfid: null,
  setPath: () => {},
  setRfid: () => {},
};

export const BadgeScannerContext = createContext(initialValue);

export const BadgeScannerProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [path, setPath] = useState<string | null>(null);
  const [rfid, setRfid] = useState<string | null>(null);

  return (
    <BadgeScannerContext.Provider
      value={{
        path,
        rfid,
        setPath,
        setRfid,
      }}
    >
      {children}
    </BadgeScannerContext.Provider>
  );
};
