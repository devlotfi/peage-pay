import { DISCONNECT_FROM_SERIAL_PORT } from '@renderer/react-query/mutations';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { useMutation as useReactMutation } from 'react-query';

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

  const { mutate: mutateDisconnectToSerialPort } = useReactMutation(
    DISCONNECT_FROM_SERIAL_PORT,
    {
      mutationKey: DISCONNECT_FROM_SERIAL_PORT.name,
      onSuccess() {
        setPath(null);
      },
    },
  );

  useEffect(() => {
    return () => {
      mutateDisconnectToSerialPort();
    };
  }, []);

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
