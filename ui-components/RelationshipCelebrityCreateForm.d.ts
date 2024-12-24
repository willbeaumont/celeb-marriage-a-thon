import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type RelationshipCelebrityCreateFormInputValues = {};
export declare type RelationshipCelebrityCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationshipCelebrityCreateFormOverridesProps = {
    RelationshipCelebrityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type RelationshipCelebrityCreateFormProps = React.PropsWithChildren<{
    overrides?: RelationshipCelebrityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RelationshipCelebrityCreateFormInputValues) => RelationshipCelebrityCreateFormInputValues;
    onSuccess?: (fields: RelationshipCelebrityCreateFormInputValues) => void;
    onError?: (fields: RelationshipCelebrityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationshipCelebrityCreateFormInputValues) => RelationshipCelebrityCreateFormInputValues;
    onValidate?: RelationshipCelebrityCreateFormValidationValues;
} & React.CSSProperties>;
export default function RelationshipCelebrityCreateForm(props: RelationshipCelebrityCreateFormProps): React.ReactElement;
