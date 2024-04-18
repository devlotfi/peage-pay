import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { DISCONNECT_FROM_SERIAL_PORT } from '../react-query/mutations';
import { useMutation as useReactMutation } from 'react-query';

interface SerialPortContext {
  path: string | null;
  setPath: (value: string | null) => void;
}

const initialValue: SerialPortContext = {
  path: null,
  setPath: () => {},
};

export const SerialPortContext = createContext(initialValue);

export const SerialPortProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [path, setPath] = useState<string | null>(null);

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
    <SerialPortContext.Provider
      value={{
        path,
        setPath,
      }}
    >
      {children}
    </SerialPortContext.Provider>
  );
};
