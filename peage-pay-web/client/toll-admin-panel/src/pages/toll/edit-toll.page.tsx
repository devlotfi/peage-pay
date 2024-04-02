import { useMutation } from '@apollo/client';
import {
  faCheck,
  faExclamationCircle,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Alert,
  Button,
  FormPageLayout,
  Heading,
  LoaderDots,
  Select,
} from '@peage-pay-web/ui';
import { CHANGE_TOLL_STATUS } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TOLL_ADMIN_INFO, TOLL_BY_ID } from '../../graphql/queries';
import { TollStatusType } from '../../__generated__/graphql';
import { Utils } from '@peage-pay-web/utils';
import { useContext } from 'react';
import { TollAdminInfoConext } from '../../context/toll-admin-info.context';

const editTollValidationSchema = yup.object({});

const EditTollPage = (): JSX.Element => {
  const { tollAdmin } = useContext(TollAdminInfoConext);
  const [
    changeTollStatus,
    { loading: editLoading, error: editError, data: editData },
  ] = useMutation(CHANGE_TOLL_STATUS, {
    refetchQueries: [TOLL_ADMIN_INFO, TOLL_BY_ID],
    awaitRefetchQueries: true,
  });
  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues: {
        inboundStatus: tollAdmin.toll?.inboundStatus,
        outboundStatus: tollAdmin.toll?.outboundStatus,
      },
      validationSchema: editTollValidationSchema,
      onSubmit(values) {
        if (tollAdmin.toll) {
          changeTollStatus({
            variables: {
              changeTollStatusInput: {
                inboundStatus: values.inboundStatus!,
                outboundStatus: values.outboundStatus!,
                tollId: tollAdmin.toll.id,
              },
            },
          });
        }
      },
    });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <FormPageLayout.Title>
          <Heading className="text-[20pt]">
            <Heading.Icon position={'left'}>
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            </Heading.Icon>
            <Heading.Text>Edit toll</Heading.Text>
          </Heading>
        </FormPageLayout.Title>

        <Select
          variant={
            errors.inboundStatus && touched.inboundStatus ? 'error' : 'edge-100'
          }
          className="w-full mb-[1.3rem]"
        >
          <Select.Main>
            <Select.Label>Inbound status</Select.Label>
            <Select.Field
              name="inboundStatus"
              value={values.inboundStatus}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {Utils.renderFieldOptions(TollStatusType)}
            </Select.Field>
          </Select.Main>
          {errors.inboundStatus && touched.inboundStatus ? (
            <Select.InfoMessage>{errors.inboundStatus}</Select.InfoMessage>
          ) : null}
        </Select>
        <Select
          variant={
            errors.outboundStatus && touched.outboundStatus
              ? 'error'
              : 'edge-100'
          }
          className="w-full mb-[1.3rem]"
        >
          <Select.Main>
            <Select.Label>Inbound status</Select.Label>
            <Select.Field
              name="outboundStatus"
              value={values.outboundStatus}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {Utils.renderFieldOptions(TollStatusType)}
            </Select.Field>
          </Select.Main>
          {errors.outboundStatus && touched.outboundStatus ? (
            <Select.InfoMessage>{errors.outboundStatus}</Select.InfoMessage>
          ) : null}
        </Select>

        {editData ? (
          <Alert variant={'success'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>Toll updated</Alert.Content>
          </Alert>
        ) : null}

        {editError ? (
          <Alert variant={'error'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>{`auth:errors.${editError.message}`}</Alert.Content>
          </Alert>
        ) : null}

        <Button type="submit" variant={'primary'} className="mt-[0.5rem]">
          {editLoading ? (
            <LoaderDots dotProps={{ variant: 'color-content' }}></LoaderDots>
          ) : (
            <>
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Edit toll</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default EditTollPage;
