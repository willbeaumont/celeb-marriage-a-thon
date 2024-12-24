/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCelebrity = /* GraphQL */ `
  mutation CreateCelebrity(
    $condition: ModelCelebrityConditionInput
    $input: CreateCelebrityInput!
  ) {
    createCelebrity(condition: $condition, input: $input) {
      createdAt
      firstPerson
      id
      lengthInDays
      passingMessage
      relationships {
        nextToken
        __typename
      }
      secondPerson
      unionName
      updatedAt
      __typename
    }
  }
`;
export const createRelationship = /* GraphQL */ `
  mutation CreateRelationship(
    $condition: ModelRelationshipConditionInput
    $input: CreateRelationshipInput!
  ) {
    createRelationship(condition: $condition, input: $input) {
      celebrities {
        nextToken
        __typename
      }
      createdAt
      id
      notifyOwner
      notifySpouse
      owner
      ownerName
      spouseName
      spouseemail
      unionStartDate
      updatedAt
      __typename
    }
  }
`;
export const createRelationshipCelebrity = /* GraphQL */ `
  mutation CreateRelationshipCelebrity(
    $condition: ModelRelationshipCelebrityConditionInput
    $input: CreateRelationshipCelebrityInput!
  ) {
    createRelationshipCelebrity(condition: $condition, input: $input) {
      celebrity {
        createdAt
        firstPerson
        id
        lengthInDays
        passingMessage
        secondPerson
        unionName
        updatedAt
        __typename
      }
      celebrityId
      createdAt
      id
      owner
      relationship {
        createdAt
        id
        notifyOwner
        notifySpouse
        owner
        ownerName
        spouseName
        spouseemail
        unionStartDate
        updatedAt
        __typename
      }
      relationshipId
      updatedAt
      __typename
    }
  }
`;
export const deleteCelebrity = /* GraphQL */ `
  mutation DeleteCelebrity(
    $condition: ModelCelebrityConditionInput
    $input: DeleteCelebrityInput!
  ) {
    deleteCelebrity(condition: $condition, input: $input) {
      createdAt
      firstPerson
      id
      lengthInDays
      passingMessage
      relationships {
        nextToken
        __typename
      }
      secondPerson
      unionName
      updatedAt
      __typename
    }
  }
`;
export const deleteRelationship = /* GraphQL */ `
  mutation DeleteRelationship(
    $condition: ModelRelationshipConditionInput
    $input: DeleteRelationshipInput!
  ) {
    deleteRelationship(condition: $condition, input: $input) {
      celebrities {
        nextToken
        __typename
      }
      createdAt
      id
      notifyOwner
      notifySpouse
      owner
      ownerName
      spouseName
      spouseemail
      unionStartDate
      updatedAt
      __typename
    }
  }
`;
export const deleteRelationshipCelebrity = /* GraphQL */ `
  mutation DeleteRelationshipCelebrity(
    $condition: ModelRelationshipCelebrityConditionInput
    $input: DeleteRelationshipCelebrityInput!
  ) {
    deleteRelationshipCelebrity(condition: $condition, input: $input) {
      celebrity {
        createdAt
        firstPerson
        id
        lengthInDays
        passingMessage
        secondPerson
        unionName
        updatedAt
        __typename
      }
      celebrityId
      createdAt
      id
      owner
      relationship {
        createdAt
        id
        notifyOwner
        notifySpouse
        owner
        ownerName
        spouseName
        spouseemail
        unionStartDate
        updatedAt
        __typename
      }
      relationshipId
      updatedAt
      __typename
    }
  }
`;
export const updateCelebrity = /* GraphQL */ `
  mutation UpdateCelebrity(
    $condition: ModelCelebrityConditionInput
    $input: UpdateCelebrityInput!
  ) {
    updateCelebrity(condition: $condition, input: $input) {
      createdAt
      firstPerson
      id
      lengthInDays
      passingMessage
      relationships {
        nextToken
        __typename
      }
      secondPerson
      unionName
      updatedAt
      __typename
    }
  }
`;
export const updateRelationship = /* GraphQL */ `
  mutation UpdateRelationship(
    $condition: ModelRelationshipConditionInput
    $input: UpdateRelationshipInput!
  ) {
    updateRelationship(condition: $condition, input: $input) {
      celebrities {
        nextToken
        __typename
      }
      createdAt
      id
      notifyOwner
      notifySpouse
      owner
      ownerName
      spouseName
      spouseemail
      unionStartDate
      updatedAt
      __typename
    }
  }
`;
export const updateRelationshipCelebrity = /* GraphQL */ `
  mutation UpdateRelationshipCelebrity(
    $condition: ModelRelationshipCelebrityConditionInput
    $input: UpdateRelationshipCelebrityInput!
  ) {
    updateRelationshipCelebrity(condition: $condition, input: $input) {
      celebrity {
        createdAt
        firstPerson
        id
        lengthInDays
        passingMessage
        secondPerson
        unionName
        updatedAt
        __typename
      }
      celebrityId
      createdAt
      id
      owner
      relationship {
        createdAt
        id
        notifyOwner
        notifySpouse
        owner
        ownerName
        spouseName
        spouseemail
        unionStartDate
        updatedAt
        __typename
      }
      relationshipId
      updatedAt
      __typename
    }
  }
`;
