import { useMutation } from '@apollo/client';
import {
  faArrowDown,
  faInfoCircle,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AutomaticGateAuthContext } from '@peage-pay-web/automatic-gate-auth';
import { ConnectToSerialPortFrom } from '@peage-pay-web/serial-port';
import { Alert, Button, LoaderDots } from '@peage-pay-web/ui';
import PDFDisplay from '@renderer/components/pdf-display.component';
import { GENERATE_TICKET } from '@renderer/graphql/mutations';
import { OPEN_GATE } from '@renderer/react-query/mutations';
import jsPDF from 'jspdf';
import { QRCodeCanvas } from 'qrcode.react';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation as useReactMutation } from 'react-query';

const TicketPrinter = (): JSX.Element => {
  const { t } = useTranslation();
  const [pdfData, setPdfData] = useState<string>();
  const pdfDisplayModalRef = useRef<HTMLDialogElement>(null);
  const { automaticGateAuthData } = useContext(AutomaticGateAuthContext);

  const [generateTicket, { loading, error, data }] =
    useMutation(GENERATE_TICKET);

  const { mutate: mutateOpenGate } = useReactMutation(OPEN_GATE, {
    mutationKey: OPEN_GATE.name,
  });

  useEffect(() => {
    let gateTimeout;
    if (data) {
      makePdf();
      gateTimeout = setTimeout(() => {
        mutateOpenGate();
      }, 1000);
    }

    return () => {
      if (gateTimeout) {
        clearTimeout(gateTimeout);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const makePdf = () => {
    const doc = new jsPDF({
      unit: 'mm',
      orientation: 'portrait',
      format: [57, 70],
    });
    new jsPDF();

    const qrCodeCanvas: HTMLCanvasElement = document.getElementById(
      'qr-code-canvas',
    ) as HTMLCanvasElement;
    const imageData = qrCodeCanvas.toDataURL('image/webp');
    console.log(doc.internal.pageSize.getWidth());
    const docWidth = doc.internal.pageSize.getWidth();
    console.log(automaticGateAuthData?.automaticGate);
    doc.setFontSize(10),
      doc.text(`Delivré par le péage de:`, docWidth / 2, 17, {
        align: 'center',
      });
    doc.text(
      `${automaticGateAuthData?.automaticGate.toll.name}`,
      docWidth / 2,
      23,
      {
        align: 'center',
      },
    );
    const imgWidth = 30;
    const imgHeight = 30;
    doc.addImage(
      imageData,
      'WEBP',
      (docWidth - imgWidth) / 2,
      30,
      imgWidth,
      imgHeight,
    );

    doc.text('Ticket de peage', docWidth / 2, 10, {
      align: 'center',
    });

    const data = doc.output('datauristring');
    console.log(data);

    setPdfData(data);
    pdfDisplayModalRef.current?.showModal();
  };

  return (
    <div className="flex flex-col flex-1">
      <ConnectToSerialPortFrom></ConnectToSerialPortFrom>
      <div className="flex flex-col flex-1 justify-center items-center">
        <PDFDisplay
          modalRef={pdfDisplayModalRef}
          pdfData={pdfData}
        ></PDFDisplay>
        <QRCodeCanvas
          id="qr-code-canvas"
          className="hidden"
          value={data?.generateTicket.id || ''}
          size={200}
        ></QRCodeCanvas>

        {error ? (
          <Alert variant="error">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>{error.message}</Alert.Content>
          </Alert>
        ) : undefined}
        <div className="flex flex-col">
          <FontAwesomeIcon
            className="text-success-100"
            icon={faPrint}
            size="5x"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="my-[1rem]"
            icon={faArrowDown}
            size="3x"
          ></FontAwesomeIcon>
          <Button
            className="min-h-[5rem] px-[3rem] text-[15pt]"
            variant={'success'}
            onClick={() => generateTicket()}
          >
            {loading ? (
              <LoaderDots dotProps={{ variant: 'color-content' }}></LoaderDots>
            ) : (
              <>
                <Button.Content>{t('PRINT_TICKET')}</Button.Content>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketPrinter;
