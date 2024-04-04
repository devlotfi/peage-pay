import { useQuery } from '@apollo/client';
import { IPCMessages } from '@constants/ipc-messages';
import { faIdBadge, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Heading, Table } from '@peage-pay-web/ui';
import ConnectToSerialPortFrom from '@renderer/components/seria-port/connect-to-serial-port-form.component';
import { BadgeScannerContext } from '@renderer/context/badge-scanner.context';
import { RFID_TAG_BY_RFID } from '@renderer/graphql/queries';
import { useContext, useEffect, useRef } from 'react';

const BadgeScannerPage = () => {
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
        <Heading.Text>RFID Badge scanner</Heading.Text>
      </Heading>
      <ConnectToSerialPortFrom></ConnectToSerialPortFrom>

      {rfid ? (
        <div className="flex flex-col flex-1">
          <Heading className="text-[15pt] ml-[1rem] my-[0.7rem]">
            <Heading.Icon position="left">
              <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
            </Heading.Icon>
            <Heading.Text>Scanned tag</Heading.Text>
          </Heading>

          <Table.Container>
            <Table>
              <Table.Body>
                <Table.Body.Tr>
                  <Table.Body.Td>RFID</Table.Body.Td>
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
                    <Heading.Text>Tag data</Heading.Text>
                  </Heading>

                  <Table.Container>
                    <Table>
                      <Table.Body>
                        <Table.Body.Tr>
                          <Table.Body.Td>Id</Table.Body.Td>
                          <Table.Body.Td>{data.rfidTagByRfid.id}</Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr>
                          <Table.Body.Td>Rfid</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.rfid}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr>
                          <Table.Body.Td>Registration number</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.registrationNumber}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr>
                          <Table.Body.Td>Created at</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.createdAt}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr>
                          <Table.Body.Td>Updated at</Table.Body.Td>
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
                    <Heading.Text>User data</Heading.Text>
                  </Heading>

                  <Table.Container>
                    <Table>
                      <Table.Body>
                        <Table.Body.Tr>
                          <Table.Body.Td>Id</Table.Body.Td>
                          <Table.Body.Td>{data.rfidTagByRfid.id}</Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr>
                          <Table.Body.Td>First name</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.baseUser.firstName}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr>
                          <Table.Body.Td>Last name</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.baseUser.lastName}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr>
                          <Table.Body.Td>Created at</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.createdAt}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                        <Table.Body.Tr>
                          <Table.Body.Td>Updated at</Table.Body.Td>
                          <Table.Body.Td>
                            {data.rfidTagByRfid.updatedAt}
                          </Table.Body.Td>
                        </Table.Body.Tr>
                      </Table.Body>
                    </Table>
                  </Table.Container>
                </>
              ) : (
                <div className="flex p-[1rem] flex-col flex-1 justify-center items-center">
                  <h1>This tag is not registered</h1>
                </div>
              )}
            </AdminDashboardLayout.Error>
          </AdminDashboardLayout.Loading>
        </div>
      ) : (
        <div className="flex p-[1rem] flex-col flex-1 justify-center items-center">
          <h1>Scan a tag to get started</h1>
        </div>
      )}
    </div>
  );
};

export default BadgeScannerPage;
