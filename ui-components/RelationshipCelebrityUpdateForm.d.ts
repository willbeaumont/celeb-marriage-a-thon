import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { RelationshipCelebrity } from "./graphql/types";
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
export declare type RelationshipCelebrityUpdateFormInputValues = {};
export declare type RelationshipCelebrityUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationshipCelebrityUpdateFormOverridesProps = {
    RelationshipCelebrityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type RelationshipCelebrityUpdateFormProps = React.PropsWithChildren<{
    overrides?: RelationshipCelebrityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    relationshipCelebrity?: RelationshipCelebrity;
    onSubmit?: (fields: RelationshipCelebrityUpdateFormInputValues) => RelationshipCelebrityUpdateFormInputValues;
    onSuccess?: (fields: RelationshipCelebrityUpdateFormInputValues) => void;
    onError?: (fields: RelationshipCelebrityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationshipCelebrityUpdateFormInputValues) => RelationshipCelebrityUpdateFormInputValues;
    onValidate?: RelationshipCelebrityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RelationshipCelebrityUpdateForm(props: RelationshipCelebrityUpdateFormProps): React.ReactElement;
