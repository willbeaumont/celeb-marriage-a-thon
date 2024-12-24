import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CelebrityCreateFormInputValues = {
    unionName?: string;
    firstPerson?: string;
    secondPerson?: string;
    lengthInDays?: number;
    passingMessage?: string;
};
export declare type CelebrityCreateFormValidationValues = {
    unionName?: ValidationFunction<string>;
    firstPerson?: ValidationFunction<string>;
    secondPerson?: ValidationFunction<string>;
    lengthInDays?: ValidationFunction<number>;
    passingMessage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CelebrityCreateFormOverridesProps = {
    CelebrityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    unionName?: PrimitiveOverrideProps<TextFieldProps>;
    firstPerson?: PrimitiveOverrideProps<TextFieldProps>;
    secondPerson?: PrimitiveOverrideProps<TextFieldProps>;
    lengthInDays?: PrimitiveOverrideProps<TextFieldProps>;
    passingMessage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CelebrityCreateFormProps = React.PropsWithChildren<{
    overrides?: CelebrityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CelebrityCreateFormInputValues) => CelebrityCreateFormInputValues;
    onSuccess?: (fields: CelebrityCreateFormInputValues) => void;
    onError?: (fields: CelebrityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CelebrityCreateFormInputValues) => CelebrityCreateFormInputValues;
    onValidate?: CelebrityCreateFormValidationValues;
} & React.CSSProperties>;
export default function CelebrityCreateForm(props: CelebrityCreateFormProps): React.ReactElement;
