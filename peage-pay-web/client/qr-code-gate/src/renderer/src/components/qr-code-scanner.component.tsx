import { AdminDashboardLayout, Select } from '@peage-pay-web/ui';
import { Utils } from '@peage-pay-web/utils';
import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface QRCodeScannerProps {
  cameraList: QrScanner.Camera[];
  onScan?: (ticket: string) => void;
}

const QRCodeScanner = ({
  cameraList,
  onScan,
}: QRCodeScannerProps): JSX.Element => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const qrCodeScannerRef = useRef<QrScanner>();
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [videoLoading, setVideoLoading] = useState<boolean>(true);
  const [selectedCamera, setSelectedCamera] = useState<string>(
    cameraList[0].id,
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    const startStream = async () => {
      if (videoRef.current) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        videoRef.current.srcObject = stream;
      }

      setStream(stream);
    };
    const stopStream = async () => {
      if (videoRef.current && videoRef.current.srcObject) {
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        videoRef.current.srcObject = null;
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
    if (videoRef.current) {
      const qrCodeScanner = new QrScanner(
        videoRef.current,
        (value) => {
          if (onScan) {
            onScan(value.data);
          }
        },
        {
          highlightCodeOutline: true,
          highlightScanRegion: true,
        },
      );
      qrCodeScannerRef.current = qrCodeScanner;
      qrCodeScanner.start();

      return () => {
        qrCodeScanner.destroy();
      };
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col max-w-full flex-1 mt-[1rem]">
      <Select variant={'edge-100'} className="w-full">
        <Select.Main>
          <Select.Label>{t('CAMERA')}</Select.Label>
          <Select.Field
            name="camera"
            value={selectedCamera}
            onChange={(e) => {
              setSelectedCamera(e.target.value);
              qrCodeScannerRef.current?.setCamera(e.target.value);
            }}
          >
            {cameraList.map((camera) => (
              <option key={camera.id} value={camera.id}>
                {camera.label}
              </option>
            ))}
          </Select.Field>
        </Select.Main>
      </Select>

      <AdminDashboardLayout.Loading
        loading={videoLoading}
      ></AdminDashboardLayout.Loading>
      <video
        autoPlay
        ref={videoRef}
        className={Utils.cn(
          'rounded-xl mt-[1rem] border-[1px] border-edge-200',
          videoLoading && 'h-0 border-[0px]',
        )}
      ></video>
    </div>
  );
};

export default QRCodeScanner;
