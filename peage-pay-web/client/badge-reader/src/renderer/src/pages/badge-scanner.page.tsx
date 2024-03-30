import { IPCMessages } from '@constants/ipc-messages';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading } from '@peage-pay-web/ui';
import ConnectToSerialPortFrom from '@renderer/components/connect-to-serial-port-form.component';
import { BadgeScannerContext } from '@renderer/context/badge-scanner.context';
import { DISCONNECT_FROM_SERIAL_PORT } from '@renderer/react-query/mutations';
import { useContext, useEffect, useRef } from 'react';
import { useMutation as useReactMutation } from 'react-query';

const BadgeScannerPage = () => {
  const { rfid, setRfid, setPath } = useContext(BadgeScannerContext);
  const listenersRegisteredRef = useRef(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!listenersRegisteredRef.current) {
      window.electron.ipcRenderer.on(
        IPCMessages.BADGE_DETECTED,
        (_event, rfid: string) => {
          console.log(rfid);
          setRfid(rfid);
        },
      );

      listenersRegisteredRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Heading className="text-[20pt] ml-[1rem] mb-[1rem]">
        <Heading.Icon position="left">
          <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>RFID Badge scanner</Heading.Text>
      </Heading>
      <ConnectToSerialPortFrom></ConnectToSerialPortFrom>

      <h1>{JSON.stringify(rfid)}</h1>
    </div>
  );
};

export default BadgeScannerPage;
