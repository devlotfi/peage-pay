import QRCodeScanner from '@renderer/components/qr-code-scanner.component';

const ScanTicketPage = (): JSX.Element => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1">
        <QRCodeScanner></QRCodeScanner>
      </div>
      <div className="flex h-full min-w-[1px] bg-edge-100 mx-[1rem]"></div>
      <div className="flex flex-col flex-1"></div>
    </div>
  );
};

export default ScanTicketPage;
