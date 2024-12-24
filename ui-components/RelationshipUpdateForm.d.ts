import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Relationship } from "./graphql/types";
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
export declare type RelationshipUpdateFormInputValues = {
    ownerName?: string;
    notifyOwner?: boolean;
    spouseName?: string;
    spouseemail?: string;
    notifySpouse?: boolean;
    unionStartDate?: string;
};
export declare type RelationshipUpdateFormValidationValues = {
    ownerName?: ValidationFunction<string>;
    notifyOwner?: ValidationFunction<boolean>;
    spouseName?: ValidationFunction<string>;
    spouseemail?: ValidationFunction<string>;
    notifySpouse?: ValidationFunction<boolean>;
    unionStartDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationshipUpdateFormOverridesProps = {
    RelationshipUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ownerName?: PrimitiveOverrideProps<TextFieldProps>;
    notifyOwner?: PrimitiveOverrideProps<SwitchFieldProps>;
    spouseName?: PrimitiveOverrideProps<TextFieldProps>;
    spouseemail?: PrimitiveOverrideProps<TextFieldProps>;
    notifySpouse?: PrimitiveOverrideProps<SwitchFieldProps>;
    unionStartDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RelationshipUpdateFormProps = React.PropsWithChildren<{
    overrides?: RelationshipUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    relationship?: Relationship;
    onSubmit?: (fields: RelationshipUpdateFormInputValues) => RelationshipUpdateFormInputValues;
    onSuccess?: (fields: RelationshipUpdateFormInputValues) => void;
    onError?: (fields: RelationshipUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationshipUpdateFormInputValues) => RelationshipUpdateFormInputValues;
    onValidate?: RelationshipUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RelationshipUpdateForm(props: RelationshipUpdateFormProps): React.ReactElement;
