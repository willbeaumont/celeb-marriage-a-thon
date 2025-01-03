/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createRelationship } from "./graphql/mutations";
const client = generateClient();
export default function RelationshipCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ownerName: "",
    notifyOwner: false,
    spouseName: "",
    spouseemail: "",
    notifySpouse: false,
    unionStartDate: "",
  };
  const [ownerName, setOwnerName] = React.useState(initialValues.ownerName);
  const [notifyOwner, setNotifyOwner] = React.useState(
    initialValues.notifyOwner
  );
  const [spouseName, setSpouseName] = React.useState(initialValues.spouseName);
  const [spouseemail, setSpouseemail] = React.useState(
    initialValues.spouseemail
  );
  const [notifySpouse, setNotifySpouse] = React.useState(
    initialValues.notifySpouse
  );
  const [unionStartDate, setUnionStartDate] = React.useState(
    initialValues.unionStartDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOwnerName(initialValues.ownerName);
    setNotifyOwner(initialValues.notifyOwner);
    setSpouseName(initialValues.spouseName);
    setSpouseemail(initialValues.spouseemail);
    setNotifySpouse(initialValues.notifySpouse);
    setUnionStartDate(initialValues.unionStartDate);
    setErrors({});
  };
  const validations = {
    ownerName: [],
    notifyOwner: [],
    spouseName: [],
    spouseemail: [{ type: "Email" }],
    notifySpouse: [],
    unionStartDate: [],
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
          ownerName,
          notifyOwner,
          spouseName,
          spouseemail,
          notifySpouse,
          unionStartDate,
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
            query: createRelationship.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RelationshipCreateForm")}
      {...rest}
    >
      <TextField
        label="Owner name"
        isRequired={false}
        isReadOnly={false}
        value={ownerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ownerName: value,
              notifyOwner,
              spouseName,
              spouseemail,
              notifySpouse,
              unionStartDate,
            };
            const result = onChange(modelFields);
            value = result?.ownerName ?? value;
          }
          if (errors.ownerName?.hasError) {
            runValidationTasks("ownerName", value);
          }
          setOwnerName(value);
        }}
        onBlur={() => runValidationTasks("ownerName", ownerName)}
        errorMessage={errors.ownerName?.errorMessage}
        hasError={errors.ownerName?.hasError}
        {...getOverrideProps(overrides, "ownerName")}
      ></TextField>
      <SwitchField
        label="Notify owner"
        defaultChecked={false}
        isDisabled={false}
        isChecked={notifyOwner}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ownerName,
              notifyOwner: value,
              spouseName,
              spouseemail,
              notifySpouse,
              unionStartDate,
            };
            const result = onChange(modelFields);
            value = result?.notifyOwner ?? value;
          }
          if (errors.notifyOwner?.hasError) {
            runValidationTasks("notifyOwner", value);
          }
          setNotifyOwner(value);
        }}
        onBlur={() => runValidationTasks("notifyOwner", notifyOwner)}
        errorMessage={errors.notifyOwner?.errorMessage}
        hasError={errors.notifyOwner?.hasError}
        {...getOverrideProps(overrides, "notifyOwner")}
      ></SwitchField>
      <TextField
        label="Spouse name"
        isRequired={false}
        isReadOnly={false}
        value={spouseName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ownerName,
              notifyOwner,
              spouseName: value,
              spouseemail,
              notifySpouse,
              unionStartDate,
            };
            const result = onChange(modelFields);
            value = result?.spouseName ?? value;
          }
          if (errors.spouseName?.hasError) {
            runValidationTasks("spouseName", value);
          }
          setSpouseName(value);
        }}
        onBlur={() => runValidationTasks("spouseName", spouseName)}
        errorMessage={errors.spouseName?.errorMessage}
        hasError={errors.spouseName?.hasError}
        {...getOverrideProps(overrides, "spouseName")}
      ></TextField>
      <TextField
        label="Spouseemail"
        isRequired={false}
        isReadOnly={false}
        value={spouseemail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ownerName,
              notifyOwner,
              spouseName,
              spouseemail: value,
              notifySpouse,
              unionStartDate,
            };
            const result = onChange(modelFields);
            value = result?.spouseemail ?? value;
          }
          if (errors.spouseemail?.hasError) {
            runValidationTasks("spouseemail", value);
          }
          setSpouseemail(value);
        }}
        onBlur={() => runValidationTasks("spouseemail", spouseemail)}
        errorMessage={errors.spouseemail?.errorMessage}
        hasError={errors.spouseemail?.hasError}
        {...getOverrideProps(overrides, "spouseemail")}
      ></TextField>
      <SwitchField
        label="Notify spouse"
        defaultChecked={false}
        isDisabled={false}
        isChecked={notifySpouse}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ownerName,
              notifyOwner,
              spouseName,
              spouseemail,
              notifySpouse: value,
              unionStartDate,
            };
            const result = onChange(modelFields);
            value = result?.notifySpouse ?? value;
          }
          if (errors.notifySpouse?.hasError) {
            runValidationTasks("notifySpouse", value);
          }
          setNotifySpouse(value);
        }}
        onBlur={() => runValidationTasks("notifySpouse", notifySpouse)}
        errorMessage={errors.notifySpouse?.errorMessage}
        hasError={errors.notifySpouse?.hasError}
        {...getOverrideProps(overrides, "notifySpouse")}
      ></SwitchField>
      <TextField
        label="Union start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={unionStartDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ownerName,
              notifyOwner,
              spouseName,
              spouseemail,
              notifySpouse,
              unionStartDate: value,
            };
            const result = onChange(modelFields);
            value = result?.unionStartDate ?? value;
          }
          if (errors.unionStartDate?.hasError) {
            runValidationTasks("unionStartDate", value);
          }
          setUnionStartDate(value);
        }}
        onBlur={() => runValidationTasks("unionStartDate", unionStartDate)}
        errorMessage={errors.unionStartDate?.errorMessage}
        hasError={errors.unionStartDate?.hasError}
        {...getOverrideProps(overrides, "unionStartDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
