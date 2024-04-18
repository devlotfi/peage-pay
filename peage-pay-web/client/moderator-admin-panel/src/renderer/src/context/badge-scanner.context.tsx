import { PropsWithChildren, createContext, useState } from 'react';

interface BadgeScannerContext {
  rfid: string | null;
  setRfid: (value: string | null) => void;
}

const initialValue: BadgeScannerContext = {
  rfid: null,
  setRfid: () => {},
};

export const BadgeScannerContext = createContext(initialValue);

export const BadgeScannerProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [rfid, setRfid] = useState<string | null>(null);

  return (
    <BadgeScannerContext.Provider
      value={{
        rfid,
        setRfid,
      }}
    >
      {children}
    </BadgeScannerContext.Provider>
  );
};
