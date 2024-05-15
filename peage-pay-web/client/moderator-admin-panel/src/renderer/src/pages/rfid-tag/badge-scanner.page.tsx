import { useQuery } from '@apollo/client';
import { IPCMessages } from '@constants/ipc-messages';
import { faIdBadge, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Alert, Heading, Table } from '@peage-pay-web/ui';
import { BadgeScannerContext } from '@renderer/context/badge-scanner.context';
import { RFID_TAG_BY_RFID } from '@renderer/graphql/queries';
import { useContext, useEffect, useRef } from 'react';
import { ConnectToSerialPortFrom } from '@peage-pay-web/serial-port';
import { useTranslation } from 'react-i18next';

const BadgeScannerPage = () => {
  const { t } = useTranslation();
  const { rfid, setRfid } = useContext(BadgeScannerContext);
  const listenersRegisteredRef = useRef(false);

  const { loading, error, data } = useQuery(RFID_TAG_BY_RFID, {
    variables: {
      rfidTagByRfidInput: {
        rfid: rfid as string,
      },
    },
    fetchPolicy: 'network-only',
    skip: !rfid,
  });

  useEffect(() => {
    if (!listenersRegisteredRef.current) {
      window.electron.ipcRenderer.on(
        IPCMessages.BADGE_DETECTED,
        (_event, rfid: string) => {
          console.log(rfid);
          setRfid(rfid);
        },
      );

      listenersRegisteredRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <Heading className="text-[20pt] ml-[1rem] mb-[1rem]">
        <Heading.Icon position="left">
          <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>{t('SCAN_RFID_TAG')}</Heading.Text>
      </Heading>
      <ConnectToSerialPortFrom></ConnectToSerialPortFrom>

      {rfid ? (
        <div className="flex flex-col flex-1">
          <Heading className="text-[15pt] ml-[1rem] my-[0.7rem]">
            <Heading.Icon position="left">
              <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
            </Heading.Icon>
            <Heading.Text>{t('SCANNED_TAG')}</Heading.Text>
          </Heading>

          <Table.Container>
            <Table>
              <Table.Body>
                <Table.Body.Tr variant={'zebra'}>
                  <Table.Body.Td>{t('RFID')}</Table.Body.Td>
                  <Table.Body.Td>{rfid}</Table.Body.Td>
                </Table.Body.Tr>
              </Table.Body>
            </Table>
          </Table.Container>

          <AdminDashboardLayout.Loading loading={loading}>
            <AdminDashboardLayout.Error error={error}>
              {data?.rfidTagByRfid ? (
                <>
                  <Heading className="text-[15pt] ml-[1rem] my-[0.7rem]">
                    <Heading.Icon position="left">
                      <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
                    </Heading.Icon>
                    <Heading.Text>{t('RFID_TAG')}</Heading.Text>
                  </Heading>

                  <Table.Container>
                    <Table>
                      <Table.Body>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>{t('ID')}</Table.Body.Td>
                          <Table.Body.Td>{data.rfidTagByRfid.id}</Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>{t('RFID')}</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.rfid}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>
                            {t('REGISTRATION_NUMBER')}
                          </Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.registrationNumber}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>{t('CREATED_AT')}</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.createdAt}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>{t('UPDATED_AT')}</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.updatedAt}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                      </Table.Body>
                    </Table>
                  </Table.Container>

                  <Heading className="text-[15pt] ml-[1rem] my-[0.7rem]">
                    <Heading.Icon position="left">
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </Heading.Icon>
                    <Heading.Text>{t('USER')}</Heading.Text>
                  </Heading>

                  <Table.Container>
                    <Table>
                      <Table.Body>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>{t('ID')}</Table.Body.Td>
                          <Table.Body.Td>{data.rfidTagByRfid.id}</Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>{t('FIRST_NAME')}</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.baseUser.firstName}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>{t('LAST_NAME')}</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.baseUser.lastName}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>{t('CREATED_AT')}</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.createdAt}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr variant={'zebra'}>
                          <Table.Body.Td>{t('UPDATED_AT')}</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.updatedAt}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                      </Table.Body>
                    </Table>
                  </Table.Container>
                </>
              ) : (
                <Alert className="mt-[1rem]" variant="primary">
                  <Alert.Icon position={'left'}>
                    <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
                  </Alert.Icon>
                  <Alert.Content>{t('TAG_NOT_REGISTERED')}</Alert.Content>
                </Alert>
              )}
            </AdminDashboardLayout.Error>
          </AdminDashboardLayout.Loading>
        </div>
      ) : (
        <div className="flex p-[1rem] flex-col flex-1 justify-center items-center">
          <h1>{t('SCAN_A_BADGE')}</h1>
        </div>
      )}
    </div>
  );
};

export default BadgeScannerPage;
