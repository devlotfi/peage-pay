import { useMutation, useQuery } from '@apollo/client';
import {
  faCheck,
  faCheckCircle,
  faExclamationCircle,
  faQrcode,
  faRefresh,
  faRoadBarrier,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Camera } from '@peage-pay-web/assets';
import {
  AdminDashboardLayout,
  Alert,
  Button,
  Heading,
  LoaderDots,
  Table,
} from '@peage-pay-web/ui';
import QRCodeScanner from '@renderer/components/qr-code-scanner.component';
import { TICKET_INFO } from '@renderer/graphql/queries';
import QrScanner from 'qr-scanner';
import { useEffect, useState } from 'react';
import { ConnectToSerialPortFrom } from '@peage-pay-web/serial-port';
import { useMutation as useReactMutation } from 'react-query';
import { OPEN_GATE } from '@renderer/react-query/mutations';
import { VALIDATE_TICKET } from '@renderer/graphql/mutations';

const ScanTicketPage = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasCamera, setHasCamera] = useState<boolean>(false);
  const [cameraList, setCameraList] = useState<QrScanner.Camera[]>([]);
  const [ticket, setTicket] = useState<string | null>(null);

  const {
    loading: ticketLoading,
    error: ticketError,
    data: ticketData,
  } = useQuery(TICKET_INFO, {
    variables: {
      ticketInfoInput: {
        id: ticket!,
      },
    },
    fetchPolicy: 'network-only',
    skip: !ticket,
  });
  const [
    validateTicket,
    {
      loading: validateTicketLoading,
      error: validateTicketError,
      data: validateTicketData,
    },
  ] = useMutation(VALIDATE_TICKET);

  const { mutate: mutateOpenGate } = useReactMutation(OPEN_GATE, {
    mutationKey: OPEN_GATE.name,
  });

  const initCameraData = async () => {
    const hasCameraPromise = QrScanner.hasCamera();
    const cameraListPromise = QrScanner.listCameras();
    await Promise.all([hasCameraPromise, cameraListPromise]);
    const hasCameraResult = await hasCameraPromise;
    const cameraListResult = await cameraListPromise;

    setHasCamera(hasCameraResult);
    setCameraList(cameraListResult);
    setLoading(false);
  };

  useEffect(() => {
    initCameraData();
  }, []);

  if (loading) {
    return (
      <AdminDashboardLayout.Loading loading></AdminDashboardLayout.Loading>
    );
  }

  if (!hasCamera) {
    return (
      <div className="flex flex-1 flex-col justify-center items-center">
        <img className="w-[15rem]" src={Camera} alt="camera" />
        <div className="flex mt-[1rem]">A camera is required</div>
        <Button
          onClick={initCameraData}
          className="mt-[1rem]"
          variant="base-200"
        >
          <Button.Icon position="left">
            <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>Refresh</Button.Content>
        </Button>
      </div>
    );
  }

  const calculateAppliedPrice = () => {
    if (ticketData && ticketData.ticketInfo.exitTollPrice) {
      return (
        (ticketData.ticketInfo.entryTollPrice +
          ticketData.ticketInfo.exitTollPrice) /
        2
      );
    }
    return 0;
  };

  const calculateTotal = () => {
    if (ticketData?.ticketInfo.distance) {
      const appliedPrice = calculateAppliedPrice();
      return ticketData.ticketInfo.distance * appliedPrice;
    }
    return 0;
  };

  const handleValidateTicket = () => {
    if (ticket) {
      validateTicket({
        variables: {
          validateTicketInput: {
            id: ticket,
          },
        },
      });
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <ConnectToSerialPortFrom></ConnectToSerialPortFrom>
      <div className="flex flex-1 mt-[1rem]">
        <div className="flex flex-col flex-1">
          <Button
            className="mb-[1rem]"
            onClick={() => mutateOpenGate()}
            variant={'success'}
          >
            <Button.Icon>
              <FontAwesomeIcon icon={faRoadBarrier}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Open Gate</Button.Content>
          </Button>
          <QRCodeScanner
            onScan={(value) => setTicket(value)}
            cameraList={cameraList}
          ></QRCodeScanner>
        </div>
        <div className="flex h-full min-w-[1px] bg-edge-100 mx-[1rem]"></div>
        <div className="flex flex-col flex-1">
          {ticket ? (
            <>
              {ticketData?.ticketInfo.used ? (
                <Alert variant="error" className="mb-[1rem]">
                  <Alert.Icon position="left">
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                    ></FontAwesomeIcon>
                  </Alert.Icon>
                  <Alert.Content>Ticket already used</Alert.Content>
                </Alert>
              ) : null}

              <Table.Container className="w-full">
                <Table>
                  <Table.Body>
                    <Table.Body.Tr variant={'zebra'}>
                      <Table.Body.Td>Ticket ID</Table.Body.Td>
                      <Table.Body.Td className="text-[9pt]">
                        {ticket}
                      </Table.Body.Td>
                    </Table.Body.Tr>
                  </Table.Body>
                </Table>
              </Table.Container>
              <AdminDashboardLayout.Loading loading={ticketLoading}>
                <AdminDashboardLayout.Error error={ticketError}>
                  <div className="flex flex-col">
                    <Heading className="text-[15pt] ml-[1rem] my-[0.7rem]">
                      <Heading.Icon position="left">
                        <FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon>
                      </Heading.Icon>
                      <Heading.Text>Ticket info</Heading.Text>
                    </Heading>
                  </div>
                  <Table.Container className="w-full">
                    <Table>
                      <Table.Body>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>Entry toll</Table.Body.Td>
                          <Table.Body.Td>
                            {ticketData?.ticketInfo.entryToll.name}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>Entry toll price</Table.Body.Td>
                          <Table.Body.Td>
                            {ticketData?.ticketInfo.entryTollPrice} dzd/km
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>Exit toll price</Table.Body.Td>
                          <Table.Body.Td>
                            {ticketData?.ticketInfo.exitTollPrice} dzd/km
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>Distance</Table.Body.Td>
                          <Table.Body.Td>
                            {ticketData?.ticketInfo.distance} km
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>Applied price</Table.Body.Td>
                          <Table.Body.Td>
                            {calculateAppliedPrice()}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                      </Table.Body>
                    </Table>
                  </Table.Container>

                  <Table.Container className="w-full mt-[1rem]">
                    <Table>
                      <Table.Body>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td className="text-primary-100 font-bold">
                            Total
                          </Table.Body.Td>
                          <Table.Body.Td className="text-primary-100">
                            {calculateTotal().toFixed(2)} dzd
                          </Table.Body.Td>
                        </Table.Body.Tr>
                      </Table.Body>
                    </Table>
                  </Table.Container>

                  {validateTicketData ? (
                    <Alert variant={'success'} className="mt-[0.5rem]">
                      <Alert.Icon position={'left'}>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                      </Alert.Icon>
                      <Alert.Content>Ticket validated</Alert.Content>
                    </Alert>
                  ) : null}

                  {validateTicketError ? (
                    <Alert variant={'error'} className="mt-[0.5rem]">
                      <Alert.Icon position={'left'}>
                        <FontAwesomeIcon
                          icon={faExclamationCircle}
                        ></FontAwesomeIcon>
                      </Alert.Icon>
                      <Alert.Content>{`auth:errors.${validateTicketError.message}`}</Alert.Content>
                    </Alert>
                  ) : null}

                  {ticketData?.ticketInfo.used ? null : (
                    <Button
                      onClick={handleValidateTicket}
                      className="mt-[1rem]"
                      variant="primary"
                    >
                      {validateTicketLoading ? (
                        <LoaderDots
                          dotProps={{ variant: 'color-content' }}
                        ></LoaderDots>
                      ) : (
                        <>
                          <Button.Icon>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                            ></FontAwesomeIcon>
                          </Button.Icon>
                          <Button.Content>Validate ticket</Button.Content>
                        </>
                      )}
                    </Button>
                  )}
                </AdminDashboardLayout.Error>
              </AdminDashboardLayout.Loading>
            </>
          ) : (
            <div className="flex flex-1 justify-center items-center">
              <div className="flex">Scan a ticket to start</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScanTicketPage;
