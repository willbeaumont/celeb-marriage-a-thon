import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RelationshipCreateFormInputValues = {
    ownerName?: string;
    notifyOwner?: boolean;
    spouseName?: string;
    spouseemail?: string;
    notifySpouse?: boolean;
    unionStartDate?: string;
};
export declare type RelationshipCreateFormValidationValues = {
    ownerName?: ValidationFunction<string>;
    notifyOwner?: ValidationFunction<boolean>;
    spouseName?: ValidationFunction<string>;
    spouseemail?: ValidationFunction<string>;
    notifySpouse?: ValidationFunction<boolean>;
    unionStartDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationshipCreateFormOverridesProps = {
    RelationshipCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ownerName?: PrimitiveOverrideProps<TextFieldProps>;
    notifyOwner?: PrimitiveOverrideProps<SwitchFieldProps>;
    spouseName?: PrimitiveOverrideProps<TextFieldProps>;
    spouseemail?: PrimitiveOverrideProps<TextFieldProps>;
    notifySpouse?: PrimitiveOverrideProps<SwitchFieldProps>;
    unionStartDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RelationshipCreateFormProps = React.PropsWithChildren<{
    overrides?: RelationshipCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RelationshipCreateFormInputValues) => RelationshipCreateFormInputValues;
    onSuccess?: (fields: RelationshipCreateFormInputValues) => void;
    onError?: (fields: RelationshipCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationshipCreateFormInputValues) => RelationshipCreateFormInputValues;
    onValidate?: RelationshipCreateFormValidationValues;
} & React.CSSProperties>;
export default function RelationshipCreateForm(props: RelationshipCreateFormProps): React.ReactElement;
