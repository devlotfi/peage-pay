import { faPowerOff, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Select, TextInput } from '@peage-pay-web/ui';
import { BadgeScannerContext } from '@renderer/context/badge-scanner.context';
import {
  CONNECT_TO_SERIAL_PORT,
  DISCONNECT_FROM_SERIAL_PORT,
} from '@renderer/react-query/mutations';
import { SERIAL_PORT_LIST } from '@renderer/react-query/queries';
import { useFormik } from 'formik';
import { useContext } from 'react';
import {
  useMutation as useReactMutation,
  useQuery as useReactQuery,
} from 'react-query';
import * as yup from 'yup';

interface ConnectToSerialPortValues {
  path: string;
}

const initialValues: ConnectToSerialPortValues = {
  path: '',
};

const connectToSerialValidationSchema = yup.object({
  path: yup.string().required(),
});

const ConnectToSerialPortFrom = () => {
  const { path, setPath } = useContext(BadgeScannerContext);

  const { data: serialPortListData, refetch: serialPortListRefetch } =
    useReactQuery(SERIAL_PORT_LIST.name, SERIAL_PORT_LIST);
  const { mutate: mutateConnectToSerialPort } = useReactMutation(
    CONNECT_TO_SERIAL_PORT,
    {
      mutationKey: CONNECT_TO_SERIAL_PORT.name,
      onSuccess() {
        setPath(values.path);
      },
    },
  );
  const { mutate: mutateDisconnectToSerialPort } = useReactMutation(
    DISCONNECT_FROM_SERIAL_PORT,
    {
      mutationKey: DISCONNECT_FROM_SERIAL_PORT.name,
      onSuccess() {
        setPath(null);
      },
    },
  );

  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema: connectToSerialValidationSchema,
      onSubmit(values) {
        console.log(values);
        mutateConnectToSerialPort(values);
      },
    });

  if (path) {
    return (
      <div className="flex w-full mt-[1rem]">
        <TextInput className="w-full" variant="success">
          <TextInput.Main>
            <TextInput.Label>Connected to</TextInput.Label>
            <TextInput.Icon position="left">
              <FontAwesomeIcon icon={faPlug}></FontAwesomeIcon>
            </TextInput.Icon>
            <div className="flex w-full items-center ml-[0.5rem]">
              Serial port:{' '}
              <span className="text-success-100 mx-[0.5rem]">{path}</span>{' '}
            </div>
          </TextInput.Main>
        </TextInput>
        <Button
          className="ml-[0.5rem]"
          variant="error"
          onClick={() => mutateDisconnectToSerialPort()}
        >
          <Button.Icon position="left">
            <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>Disconnect</Button.Content>
        </Button>
      </div>
    );
  }

  return (
    <form className="mt-[1rem] flex items-start" onSubmit={handleSubmit}>
      <Select
        variant={errors.path && touched.path ? 'error' : 'edge-100'}
        className="w-full mr-[0.5rem]"
      >
        <Select.Main>
          <Select.Label>Serial port</Select.Label>
          <Select.Field
            name="path"
            value={values.path}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Select port</option>
            {serialPortListData?.map((serialPort) => (
              <option key={serialPort.path} value={serialPort.path}>
                {serialPort.path}
              </option>
            ))}
          </Select.Field>
        </Select.Main>
        {errors.path && touched.path ? (
          <Select.InfoMessage>{errors.path}</Select.InfoMessage>
        ) : null}
      </Select>

      <Button
        onClick={() => serialPortListRefetch()}
        className="mr-[0.5rem]"
        type="button"
        variant={'base-200'}
      >
        <Button.Icon position={'left'}>
          <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
        </Button.Icon>
        <Button.Content>Refresh</Button.Content>
      </Button>
      <Button type="submit" variant={'primary'}>
        <Button.Icon position={'left'}>
          <FontAwesomeIcon icon={faPlug}></FontAwesomeIcon>
        </Button.Icon>
        <Button.Content>Connect</Button.Content>
      </Button>
    </form>
  );
};

export default ConnectToSerialPortFrom;
