import { PeagePayAdminLogo } from '@peage-pay-web/assets';
import { Button } from '@peage-pay-web/ui';
import PDFDisplay from '@renderer/components/pdf-display.component';
import jsPDF from 'jspdf';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { useRef, useState } from 'react';

const TicketPrinter = () => {
  const [text, setText] = useState('');
  const [pdfData, setPdfData] = useState<string>();
  const pdfDisplayModalRef = useRef<HTMLDialogElement>(null);

  const makePdf = () => {
    const doc = new jsPDF({
      unit: 'mm',
      orientation: 'portrait',
      format: [57, 57],
    });

    const qrCodeCanvas: HTMLCanvasElement = document.getElementById(
      'qr-code-canvas',
    ) as HTMLCanvasElement;
    const imageData = qrCodeCanvas.toDataURL('image/webp');

    doc.addImage(imageData, 'WEBP', 0, 0, 50, 50);

    // Display or save the PDF
    const data = doc.output('datauristring');
    console.log(data);

    setPdfData(data);
    pdfDisplayModalRef.current?.showModal();
  };

  return (
    <div className="flex flex-col">
      <PDFDisplay modalRef={pdfDisplayModalRef} pdfData={pdfData}></PDFDisplay>
      <Button onClick={makePdf}>
        <Button.Content>PDF</Button.Content>
      </Button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <QRCodeCanvas
        id="qr-code-canvas"
        className="hidden"
        value={text}
        size={500}
      ></QRCodeCanvas>
    </div>
  );
};

export default TicketPrinter;
