import { faIdBadge, faPlug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading } from '@peage-pay-web/ui';
import ConnectToSerialPortFrom from '@renderer/components/connect-to-serial-port-form.component';
import { BadgeScannerContext } from '@renderer/context/badge-scanner.context';
import { useContext, useEffect, useRef } from 'react';

const BadgeScannerPage = () => {
  const { rfid, setRfid } = useContext(BadgeScannerContext);
  const cardDetecetdListenerRef = useRef(false);

  useEffect(() => {
    if (!cardDetecetdListenerRef.current) {
      window.electron.ipcRenderer.on(
        'BADGE_DETECTED',
        (_event, rfid: string) => {
          console.log(rfid);
          setRfid(rfid);
        },
      );

      cardDetecetdListenerRef.current = true;
    }
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
