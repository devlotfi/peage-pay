import { useMutation } from "@apollo/client";
import {
  faCaretRight,
  faCheck,
  faExclamationCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  DayOfWeekPicker,
  FormPageLayout,
  Heading,
  LoaderDots,
  TextInput,
} from "@peage-pay-web/ui";
import { useFormik } from "formik";
import * as yup from "yup";
import { ADD_GLOBAL_PRICE } from "../../../graphql/mutations";
import { Utils } from "@peage-pay-web/utils";
import { DayOfWeekType } from "../../../__generated__/graphql";

interface AddGlobalWeeklyPriceValues {
  value: number;
  priority: number;
  startTimestamp: string;
  endTimestamp: string;
  days: DayOfWeekType[];
}

const initialValues: AddGlobalWeeklyPriceValues = {
  value: 1,
  priority: 1,
  startTimestamp: "",
  endTimestamp: "",
  days: [],
};

const addGlobalWeeklyPriceValidationSchema = yup.object({
  value: yup.string().max(256).required(),
  priority: yup.string().max(10).required(),
  startTimestamp: yup.string().required(),
  endTimestamp: yup
    .string()
    .test((value, ctx) => Utils.isLaterTime(value, ctx.parent.startTimestamp))
    .required(),
  days: yup
    .array()
    .of(yup.string().oneOf(Object.values(DayOfWeekType)))
    .min(1)
    .max(7)
    .required(),
});

const AddGlobalWeeklyPricePage = (): JSX.Element => {
  const [addGlobalPrice, { loading, error, data }] =
    useMutation(ADD_GLOBAL_PRICE);
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
    validationSchema: addGlobalWeeklyPriceValidationSchema,
    onSubmit(values) {
      addGlobalPrice({
        variables: {
          addPriceInput: {
            addWeeklyPriceInput: {
              value: values.value,
              priority: values.priority,
              startTimestamp: Utils.createDateFromTimeString(
                values.startTimestamp
              ),
              endTimestamp: Utils.createDateFromTimeString(values.endTimestamp),
              days: values.days,
            },
          },
        },
      });
    },
  });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <Heading className="text-[20pt] mb-[1rem]">
          <Heading.Icon position={"left"}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>Add global weekly price</Heading.Text>
        </Heading>

        <TextInput
          variant={errors.value && touched.value ? "error" : "edge-100"}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Value</TextInput.Label>
            <TextInput.Field
              name="value"
              value={values.value}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter value"
              type="number"
              step={0.01}
              min={0}
            ></TextInput.Field>
            <TextInput.Icon position={"right"}>dzd/km</TextInput.Icon>
          </TextInput.Main>
          {errors.value && touched.value ? (
            <TextInput.InfoMessage>{errors.value}</TextInput.InfoMessage>
          ) : null}
        </TextInput>
        <TextInput
          variant={errors.value && touched.value ? "error" : "edge-100"}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Priority</TextInput.Label>
            <TextInput.Field
              name="priority"
              value={values.priority}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter priority"
              type="number"
              min={0}
            ></TextInput.Field>
          </TextInput.Main>
          {errors.priority && touched.priority ? (
            <TextInput.InfoMessage>{errors.priority}</TextInput.InfoMessage>
          ) : null}
        </TextInput>

        <div className="flex items-start flex-col sm:flex-row sm:mb-[1.3rem]">
          <TextInput
            variant={
              errors.startTimestamp && touched.startTimestamp
                ? "error"
                : "edge-100"
            }
            className="w-full"
          >
            <TextInput.Main>
              <TextInput.Label>Start timestamp</TextInput.Label>
              <TextInput.Field
                name="startTimestamp"
                value={values.startTimestamp}
                onChange={handleChange}
                onBlur={handleBlur}
                type="time"
              ></TextInput.Field>
            </TextInput.Main>
            {errors.startTimestamp && touched.startTimestamp ? (
              <TextInput.InfoMessage>
                {errors.startTimestamp}
              </TextInput.InfoMessage>
            ) : null}
          </TextInput>
          <div className="flex h-[2.7rem] justify-center items-center rotate-90 my-[0.5rem] sm:rotate-0 mx-[1rem] sm:my-0 text-[20pt]">
            <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
          </div>
          <TextInput
            variant={
              errors.endTimestamp && touched.endTimestamp ? "error" : "edge-100"
            }
            className="w-full"
          >
            <TextInput.Main>
              <TextInput.Label>End timestamp</TextInput.Label>
              <TextInput.Field
                name="endTimestamp"
                value={values.endTimestamp}
                onChange={handleChange}
                onBlur={handleBlur}
                type="time"
              ></TextInput.Field>
            </TextInput.Main>
            {errors.endTimestamp && touched.endTimestamp ? (
              <TextInput.InfoMessage>
                {errors.endTimestamp}
              </TextInput.InfoMessage>
            ) : null}
          </TextInput>
        </div>

        <DayOfWeekPicker
          className="mb-[1rem]"
          variant={errors.days && touched.days ? "error" : "edge-100"}
        >
          <DayOfWeekPicker.Main
            value={values.days}
            handleChange={(selectedDaysOfWeek) =>
              setFieldValue("days", selectedDaysOfWeek)
            }
          >
            <DayOfWeekPicker.Label>Select days of week</DayOfWeekPicker.Label>
          </DayOfWeekPicker.Main>
          {errors.days && touched.days ? (
            <DayOfWeekPicker.InfoMessage>
              {errors.days}
            </DayOfWeekPicker.InfoMessage>
          ) : null}
        </DayOfWeekPicker>

        {data ? (
          <Alert variant={"success"} className="mb-[0.5rem]">
            <Alert.Icon position={"left"}>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>Global weekly price created</Alert.Content>
          </Alert>
        ) : null}

        {error ? (
          <Alert variant={"error"} className="mb-[0.5rem]">
            <Alert.Icon position={"left"}>
              <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>{`auth:errors.${error.message}`}</Alert.Content>
          </Alert>
        ) : null}

        <Button type="submit" variant={"primary"} className="mt-[0.5rem]">
          {loading ? (
            <LoaderDots dotProps={{ variant: "color-content" }}></LoaderDots>
          ) : (
            <>
              <Button.Icon position={"left"}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Add global weekly price</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddGlobalWeeklyPricePage;
