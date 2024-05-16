import { useMutation } from '@apollo/client';
import { IPCMessages } from '@constants/ipc-messages';
import {
  faCheckCircle,
  faTowerBroadcast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AutomaticGateAuthContext } from '@peage-pay-web/automatic-gate-auth';
import { ConnectToSerialPortFrom } from '@peage-pay-web/serial-port';
import { AdminDashboardLayout } from '@peage-pay-web/ui';
import { TollDirectionType } from '@renderer/__generated__/graphql';
import { END_TRIP_RFID, START_TRIP_RFID } from '@renderer/graphql/mutations';
import { OPEN_GATE } from '@renderer/react-query/mutations';
import { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation as useReactMutation } from 'react-query';

const RfidGatePage = (): JSX.Element => {
  const { t } = useTranslation();
  const listenersRegisteredRef = useRef(false);
  const { automaticGateAuthData } = useContext(AutomaticGateAuthContext);

  const { mutate: mutateOpenGate } = useReactMutation(OPEN_GATE, {
    mutationKey: OPEN_GATE.name,
  });

  const [
    startTripRfid,
    {
      loading: startTripRfidLoading,
      error: startTripRfidError,
      data: startTripRfidData,
      reset: startTripRfidReset,
    },
  ] = useMutation(START_TRIP_RFID, {
    onCompleted() {
      mutateOpenGate();
    },
  });
  const [
    endTripRfid,
    {
      loading: endTripRfidLoading,
      error: endTripRfidError,
      data: endTripRfidData,
      reset: endTripRfidReset,
    },
  ] = useMutation(END_TRIP_RFID, {
    onCompleted() {
      mutateOpenGate();
    },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTripRfidReset();
      endTripRfidReset();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    startTripRfidData,
    endTripRfidData,
    startTripRfidReset,
    endTripRfidReset,
  ]);

  useEffect(() => {
    window.electron.ipcRenderer.on(
      IPCMessages.BADGE_DETECTED,
      (_event, rfid: string) => {
        console.log('detected');

        if (
          automaticGateAuthData &&
          automaticGateAuthData.automaticGate.direction ===
            TollDirectionType.Inbound
        ) {
          console.log('inbound');

          startTripRfid({
            variables: {
              startTripRfidInput: {
                rfid,
              },
            },
          });
        } else if (
          automaticGateAuthData &&
          automaticGateAuthData.automaticGate.direction ===
            TollDirectionType.Outbound
        ) {
          console.log('outbound');
          endTripRfid({
            variables: {
              endTripRfidInput: {
                rfid,
              },
            },
          });
        }
      },
    );

    listenersRegisteredRef.current = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      window.electron.ipcRenderer.removeAllListeners(
        IPCMessages.BADGE_DETECTED,
      );
    };
  }, [automaticGateAuthData, endTripRfid, startTripRfid]);

  return (
    <div className="flex flex-col flex-1">
      <ConnectToSerialPortFrom></ConnectToSerialPortFrom>
      <div className="flex flex-col flex-1 justify-center items-center">
        <AdminDashboardLayout.Loading
          loading={startTripRfidLoading || endTripRfidLoading}
        >
          <AdminDashboardLayout.Error
            error={startTripRfidError || endTripRfidError}
          >
            {startTripRfidData || endTripRfidData ? (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success-100 text-[10rem]"
                ></FontAwesomeIcon>
                <div className="flex text-[15pt] mt-[1rem]">
                  {t('TRANSACTION_SUCCESSFUL')}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faTowerBroadcast}
                  className="text-primary-100 text-[10rem]"
                ></FontAwesomeIcon>
                <div className="flex text-[15pt] mt-[1rem]">
                  {t('WAITING_FOR_BADGE')}
                </div>
              </div>
            )}
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </div>
    </div>
  );
};

export default RfidGatePage;
