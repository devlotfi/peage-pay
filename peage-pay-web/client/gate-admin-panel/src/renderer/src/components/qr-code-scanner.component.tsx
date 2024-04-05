import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';

const QRCodeScanner = (): JSX.Element => {
  const qrCodeScannerRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const startStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (qrCodeScannerRef.current) {
        qrCodeScannerRef.current.srcObject = stream;
      }

      setStream(stream);
    };
    const stopStream = async () => {
      if (qrCodeScannerRef.current && qrCodeScannerRef.current.srcObject) {
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        qrCodeScannerRef.current.srcObject = null;
        setStream(null);
      }
    };

    if (stream) {
      startStream();
    }

    return () => {
      stopStream();
    };
  }, [stream]);

  useEffect(() => {
    if (qrCodeScannerRef.current) {
      const qrCodeScanner = new QrScanner(
        qrCodeScannerRef.current,
        (value) => {
          console.log(value);
        },
        {},
      );
      qrCodeScanner.start();

      return () => {
        qrCodeScanner.destroy();
      };
    }

    return () => {};
  }, []);

  return (
    <div className="flex relative max-w-full">
      <video
        autoPlay
        ref={qrCodeScannerRef}
        className="absolute min-h-full min-w-full h-auto w-auto rounded-xl border-[1px] border-edge-200"
      ></video>
    </div>
  );
};

export default QRCodeScanner;
