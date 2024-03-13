import { useMutation, useQuery } from '@apollo/client';
import {
  faCheck,
  faExclamationCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Alert,
  Button,
  FormPageLayout,
  Heading,
  LoaderDots,
  TextInput,
} from '@peage-pay-web/ui';
import { ADD_GRAPH_TOLL_DISTANCE } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { TOLL_BY_ID, TOLL_NETWORK_BY_ID } from '../../graphql/queries';
import { useState } from 'react';
import { TollType } from '../../__generated__/graphql';

interface AddGraphTollDistanceValues {
  fromTollId: string;
  toTollId: string;
  distance: number;
}

const initialValues: AddGraphTollDistanceValues = {
  fromTollId: '',
  toTollId: '',
  distance: 0,
};

const addGraphTollDistanceValidationSchema = yup.object({
  fromTollId: yup.string().uuid().required(),
  toTollId: yup.string().uuid().required(),
  distance: yup.number().min(0).required(),
});

const AddGraphTollDistancePage = (): JSX.Element => {
  const { tollId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fromToll, setFromToll] = useState<TollType | null>(null);
  const {
    data: tollData,
    loading: tollLoading,
    error: tollError,
  } = useQuery(TOLL_BY_ID, {
    variables: {
      tollByIdInput: {
        tollId: tollId as string,
      },
    },
    onCompleted(data) {
      if (data.tollById) {
        setFieldValue('fromTollId', data.tollById.id);
        setFromToll(data.tollById as TollType);
      }
    },
  });
  const {
    data: tollNetworkData,
    loading: tollNetworkLoading,
    error: tollNetworkError,
  } = useQuery(TOLL_NETWORK_BY_ID, {
    variables: {
      tollNetworkByIdInput: {
        tollNetworkId: tollData?.tollById.tollNetwork.id as string,
      },
    },
    skip: tollLoading,
  });
  const [
    addGraphTollDistance,
    { loading: addLoading, error: addError, data: addData },
  ] = useMutation(ADD_GRAPH_TOLL_DISTANCE);
  const {
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: addGraphTollDistanceValidationSchema,
    onSubmit(values, formikHelpers) {
      addGraphTollDistance({
        variables: {
          addGraphTollDistanceInput: {
            fromTollId: values.fromTollId,
            toTollId: values.toTollId,
            distance: values.distance,
          },
        },
      });
    },
  });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <FormPageLayout.Loading loading={tollLoading || tollNetworkLoading}>
          <FormPageLayout.Error error={tollError || tollNetworkError}>
            <Heading className="text-[20pt]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Edit highway</Heading.Text>
            </Heading>
            <Heading className="text-[15pt] mb-[2rem]">
              <Heading.Text className="opacity-70">
                <div className="flex">
                  From toll: {tollData?.tollById?.name}
                </div>
                <div className="flex">
                  Toll network: {tollNetworkData?.tollNetworkById.name}
                </div>
              </Heading.Text>
            </Heading>

            <TextInput
              variant={
                errors.toTollId && touched.toTollId ? 'error' : 'edge-100'
              }
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Name</TextInput.Label>
                <TextInput.Field
                  name="toTollId"
                  value={values.toTollId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter highway name"
                  type="text"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.toTollId && touched.toTollId ? (
                <TextInput.InfoMessage>{errors.toTollId}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <TextInput
              variant={
                errors.distance && touched.distance ? 'error' : 'edge-100'
              }
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Distance</TextInput.Label>
                <TextInput.Field
                  name="distance"
                  value={values.distance}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter distance"
                  type="text"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.distance && touched.distance ? (
                <TextInput.InfoMessage>{errors.distance}</TextInput.InfoMessage>
              ) : null}
            </TextInput>

            {addData ? (
              <Alert variant={'success'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Highway updated</Alert.Content>
              </Alert>
            ) : null}

            {addError ? (
              <Alert variant={'error'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{`auth:errors.${addError.message}`}</Alert.Content>
              </Alert>
            ) : null}

            <Button type="submit" variant={'primary'} className="mt-[0.5rem]">
              {addLoading ? (
                <LoaderDots
                  dotProps={{ variant: 'color-content' }}
                ></LoaderDots>
              ) : (
                <>
                  <Button.Icon position={'left'}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>Edit highway</Button.Content>
                </>
              )}
            </Button>
          </FormPageLayout.Error>
        </FormPageLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddGraphTollDistancePage;
