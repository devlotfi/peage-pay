import { faCheckCircle, faQrcode, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AutomaticGateAuthContext } from '@peage-pay-web/automatic-gate-auth'
import { ConnectToSerialPortFrom } from '@peage-pay-web/serial-port'
import { AdminDashboardLayout } from '@peage-pay-web/ui'
import QRCodeScanner from '@renderer/components/qr-code-scanner.component'
import { OPEN_GATE } from '@renderer/react-query/mutations'
import QrScanner from 'qr-scanner'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMutation as useReactMutation } from 'react-query'

const QRCodeGatePage = (): JSX.Element => {
  const { t } = useTranslation()
  const { automaticGateAuthData } = useContext(AutomaticGateAuthContext)
  const [hasCamera, setHasCamera] = useState<boolean>(false)
  const [cameraList, setCameraList] = useState<QrScanner.Camera[]>([])
  const [cameraLoading, setCameraLoading] = useState<boolean>(true)

  const { mutate: mutateOpenGate } = useReactMutation(OPEN_GATE, {
    mutationKey: OPEN_GATE.name
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      /*  startTripRfidReset()
      endTripRfidReset() */
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const initCameraData = async () => {
    const hasCameraPromise = QrScanner.hasCamera()
    const cameraListPromise = QrScanner.listCameras()
    await Promise.all([hasCameraPromise, cameraListPromise])
    const hasCameraResult = await hasCameraPromise
    const cameraListResult = await cameraListPromise

    setHasCamera(hasCameraResult)
    setCameraList(cameraListResult)
    setCameraLoading(false)
  }

  useEffect(() => {
    initCameraData()
  }, [])

  return (
    <div className="flex flex-col flex-1">
      <ConnectToSerialPortFrom></ConnectToSerialPortFrom>
      <div className="flex flex-col flex-1 mt-[1rem]">
        <AdminDashboardLayout.Loading loading={false}>
          <AdminDashboardLayout.Error error={null}>
            {cameraLoading ? (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success-100 text-[10rem]"
                ></FontAwesomeIcon>
                <div className="flex text-[15pt] mt-[1rem]">{t('TRANSACTION_SUCCESSFUL')}</div>
              </div>
            ) : (
              <div className="flex flex-1">
                <div className="flex min-w-[18rem] flex-col border-edge-100 border-r-[1px] p-[1rem]">
                  <FontAwesomeIcon
                    icon={faQrcode}
                    className="text-primary-100 text-[10rem]"
                  ></FontAwesomeIcon>
                  <div className="flex text-[15pt] mt-[1rem]">{t('WAITING_FOR_QR_CODE')}</div>
                </div>
                <div className="flex flex-1 p-[1rem]">
                  <QRCodeScanner
                    onScan={(value) => console.log(value)}
                    cameraList={cameraList}
                  ></QRCodeScanner>
                </div>
              </div>
            )}
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </div>
    </div>
  )
}

export default QRCodeGatePage
