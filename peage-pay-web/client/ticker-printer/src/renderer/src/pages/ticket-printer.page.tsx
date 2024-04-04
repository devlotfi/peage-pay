import { Button } from '@peage-pay-web/ui';
import PDFDisplay from '@renderer/components/pdf-display.component';
import jsPDF from 'jspdf';
import { QRCodeCanvas } from 'qrcode.react';
import { useRef, useState } from 'react';

const TicketPrinter = () => {
  const [text, setText] = useState('');
  const [pdfData, setPdfData] = useState<string>();
  const pdfDisplayModalRef = useRef<HTMLDialogElement>(null);

  const makePdf = () => {
    const doc = new jsPDF({
      unit: 'mm',
      orientation: 'portrait',
      format: [57, 100],
    });
    new jsPDF();

    const qrCodeCanvas: HTMLCanvasElement = document.getElementById(
      'qr-code-canvas',
    ) as HTMLCanvasElement;
    const imageData = qrCodeCanvas.toDataURL('image/webp');
    console.log(doc.internal.pageSize.getWidth());
    const docWidth = doc.internal.pageSize.getWidth();
    doc.setFontSize(10);
    doc.text('Ticket de peage', docWidth / 2, 10, {
      align: 'center',
    });

    const imgWidth = 30;
    const imgHeight = 30;
    doc.addImage(
      imageData,
      'WEBP',
      (docWidth - imgWidth) / 2,
      40,
      imgWidth,
      imgHeight,
    );

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
        size={200}
      ></QRCodeCanvas>
    </div>
  );
};

export default TicketPrinter;
