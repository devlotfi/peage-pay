import { faIdBadge, faPlug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AdminDashboardLayout,
  Button,
  Heading,
  Select,
  TextInput,
} from '@peage-pay-web/ui';
import { SERIAL_PORT_LIST } from '@renderer/react-query/queries';
import { useFormik } from 'formik';
import { useQuery as useReactQuery } from 'react-query';
import * as yup from 'yup';

interface SelectSerialPortValues {
  path: string;
  baudRate: number;
}

const initialValues: SelectSerialPortValues = {
  path: '',
  baudRate: 9600,
};

const addHighwayValidationSchema = yup.object({
  path: yup.string().required(),
  baudRate: yup.string().max(10).required(),
});

const supportedBaudRates = [
  300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200, 230400, 460800,
  500000, 576000, 921600, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000,
  4000000,
];

const BadgeScannerPage = () => {
  const {
    isLoading: isSerialPortListLoading,
    isError: isSerialPortListError,
    data: serialPortListData,
    error: serialPortListError,
  } = useReactQuery(SERIAL_PORT_LIST.name, SERIAL_PORT_LIST);

  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema: addHighwayValidationSchema,
      onSubmit(values) {
        console.log(values);
      },
    });

  return (
    <div className="flex flex-col h-full">
      <Heading className="text-[20pt]">
        <Heading.Icon position="left">
          <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>RFID Badge scanner</Heading.Text>
      </Heading>

      <AdminDashboardLayout.Loading loading={isSerialPortListLoading}>
        <AdminDashboardLayout.Error error={!serialPortListData && 'Error'}>
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
                  {serialPortListData?.map((serialPort) => (
                    <option value={serialPort.path}>{serialPort.path}</option>
                  ))}
                </Select.Field>
              </Select.Main>
              {errors.path && touched.path ? (
                <Select.InfoMessage>{errors.path}</Select.InfoMessage>
              ) : null}
            </Select>
            <Select
              variant={
                errors.baudRate && touched.baudRate ? 'error' : 'edge-100'
              }
              className="w-full mr-[0.5rem]"
            >
              <Select.Main>
                <Select.Label>Baud rate</Select.Label>
                <Select.Field
                  name="baudRate"
                  value={values.baudRate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {supportedBaudRates.map((baudRate) => (
                    <option value={baudRate}>{baudRate}</option>
                  ))}
                </Select.Field>
              </Select.Main>
              {errors.baudRate && touched.baudRate ? (
                <Select.InfoMessage>{errors.baudRate}</Select.InfoMessage>
              ) : null}
            </Select>

            <Button variant={'primary'}>
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faPlug}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Connect</Button.Content>
            </Button>
          </form>
        </AdminDashboardLayout.Error>
      </AdminDashboardLayout.Loading>
    </div>
  );
};

export default BadgeScannerPage;
