import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Celebrity } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CelebrityUpdateFormInputValues = {
    unionName?: string;
    firstPerson?: string;
    secondPerson?: string;
    lengthInDays?: number;
    passingMessage?: string;
};
export declare type CelebrityUpdateFormValidationValues = {
    unionName?: ValidationFunction<string>;
    firstPerson?: ValidationFunction<string>;
    secondPerson?: ValidationFunction<string>;
    lengthInDays?: ValidationFunction<number>;
    passingMessage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CelebrityUpdateFormOverridesProps = {
    CelebrityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    unionName?: PrimitiveOverrideProps<TextFieldProps>;
    firstPerson?: PrimitiveOverrideProps<TextFieldProps>;
    secondPerson?: PrimitiveOverrideProps<TextFieldProps>;
    lengthInDays?: PrimitiveOverrideProps<TextFieldProps>;
    passingMessage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CelebrityUpdateFormProps = React.PropsWithChildren<{
    overrides?: CelebrityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    celebrity?: Celebrity;
    onSubmit?: (fields: CelebrityUpdateFormInputValues) => CelebrityUpdateFormInputValues;
    onSuccess?: (fields: CelebrityUpdateFormInputValues) => void;
    onError?: (fields: CelebrityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CelebrityUpdateFormInputValues) => CelebrityUpdateFormInputValues;
    onValidate?: CelebrityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CelebrityUpdateForm(props: CelebrityUpdateFormProps): React.ReactElement;
