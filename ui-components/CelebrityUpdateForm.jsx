/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCelebrity } from "./graphql/queries";
import { updateCelebrity } from "./graphql/mutations";
const client = generateClient();
export default function CelebrityUpdateForm(props) {
  const {
    id: idProp,
    celebrity: celebrityModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    unionName: "",
    firstPerson: "",
    secondPerson: "",
    lengthInDays: "",
    passingMessage: "",
  };
  const [unionName, setUnionName] = React.useState(initialValues.unionName);
  const [firstPerson, setFirstPerson] = React.useState(
    initialValues.firstPerson
  );
  const [secondPerson, setSecondPerson] = React.useState(
    initialValues.secondPerson
  );
  const [lengthInDays, setLengthInDays] = React.useState(
    initialValues.lengthInDays
  );
  const [passingMessage, setPassingMessage] = React.useState(
    initialValues.passingMessage
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = celebrityRecord
      ? { ...initialValues, ...celebrityRecord }
      : initialValues;
    setUnionName(cleanValues.unionName);
    setFirstPerson(cleanValues.firstPerson);
    setSecondPerson(cleanValues.secondPerson);
    setLengthInDays(cleanValues.lengthInDays);
    setPassingMessage(cleanValues.passingMessage);
    setErrors({});
  };
  const [celebrityRecord, setCelebrityRecord] =
    React.useState(celebrityModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCelebrity.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCelebrity
        : celebrityModelProp;
      setCelebrityRecord(record);
    };
    queryData();
  }, [idProp, celebrityModelProp]);
  React.useEffect(resetStateValues, [celebrityRecord]);
  const validations = {
    unionName: [],
    firstPerson: [],
    secondPerson: [],
    lengthInDays: [],
    passingMessage: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          unionName: unionName ?? null,
          firstPerson: firstPerson ?? null,
          secondPerson: secondPerson ?? null,
          lengthInDays: lengthInDays ?? null,
          passingMessage: passingMessage ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateCelebrity.replaceAll("__typename", ""),
            variables: {
              input: {
                id: celebrityRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CelebrityUpdateForm")}
      {...rest}
    >
      <TextField
        label="Union name"
        isRequired={false}
        isReadOnly={false}
        value={unionName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unionName: value,
              firstPerson,
              secondPerson,
              lengthInDays,
              passingMessage,
            };
            const result = onChange(modelFields);
            value = result?.unionName ?? value;
          }
          if (errors.unionName?.hasError) {
            runValidationTasks("unionName", value);
          }
          setUnionName(value);
        }}
        onBlur={() => runValidationTasks("unionName", unionName)}
        errorMessage={errors.unionName?.errorMessage}
        hasError={errors.unionName?.hasError}
        {...getOverrideProps(overrides, "unionName")}
      ></TextField>
      <TextField
        label="First person"
        isRequired={false}
        isReadOnly={false}
        value={firstPerson}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unionName,
              firstPerson: value,
              secondPerson,
              lengthInDays,
              passingMessage,
            };
            const result = onChange(modelFields);
            value = result?.firstPerson ?? value;
          }
          if (errors.firstPerson?.hasError) {
            runValidationTasks("firstPerson", value);
          }
          setFirstPerson(value);
        }}
        onBlur={() => runValidationTasks("firstPerson", firstPerson)}
        errorMessage={errors.firstPerson?.errorMessage}
        hasError={errors.firstPerson?.hasError}
        {...getOverrideProps(overrides, "firstPerson")}
      ></TextField>
      <TextField
        label="Second person"
        isRequired={false}
        isReadOnly={false}
        value={secondPerson}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unionName,
              firstPerson,
              secondPerson: value,
              lengthInDays,
              passingMessage,
            };
            const result = onChange(modelFields);
            value = result?.secondPerson ?? value;
          }
          if (errors.secondPerson?.hasError) {
            runValidationTasks("secondPerson", value);
          }
          setSecondPerson(value);
        }}
        onBlur={() => runValidationTasks("secondPerson", secondPerson)}
        errorMessage={errors.secondPerson?.errorMessage}
        hasError={errors.secondPerson?.hasError}
        {...getOverrideProps(overrides, "secondPerson")}
      ></TextField>
      <TextField
        label="Length in days"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={lengthInDays}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              unionName,
              firstPerson,
              secondPerson,
              lengthInDays: value,
              passingMessage,
            };
            const result = onChange(modelFields);
            value = result?.lengthInDays ?? value;
          }
          if (errors.lengthInDays?.hasError) {
            runValidationTasks("lengthInDays", value);
          }
          setLengthInDays(value);
        }}
        onBlur={() => runValidationTasks("lengthInDays", lengthInDays)}
        errorMessage={errors.lengthInDays?.errorMessage}
        hasError={errors.lengthInDays?.hasError}
        {...getOverrideProps(overrides, "lengthInDays")}
      ></TextField>
      <TextField
        label="Passing message"
        isRequired={false}
        isReadOnly={false}
        value={passingMessage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unionName,
              firstPerson,
              secondPerson,
              lengthInDays,
              passingMessage: value,
            };
            const result = onChange(modelFields);
            value = result?.passingMessage ?? value;
          }
          if (errors.passingMessage?.hasError) {
            runValidationTasks("passingMessage", value);
          }
          setPassingMessage(value);
        }}
        onBlur={() => runValidationTasks("passingMessage", passingMessage)}
        errorMessage={errors.passingMessage?.errorMessage}
        hasError={errors.passingMessage?.hasError}
        {...getOverrideProps(overrides, "passingMessage")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || celebrityModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || celebrityModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
