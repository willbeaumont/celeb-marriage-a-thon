/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCelebrity = /* GraphQL */ `
  subscription OnCreateCelebrity(
    $filter: ModelSubscriptionCelebrityFilterInput
  ) {
    onCreateCelebrity(filter: $filter) {
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
export const onCreateRelationship = /* GraphQL */ `
  subscription OnCreateRelationship(
    $filter: ModelSubscriptionRelationshipFilterInput
    $owner: String
  ) {
    onCreateRelationship(filter: $filter, owner: $owner) {
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
export const onCreateRelationshipCelebrity = /* GraphQL */ `
  subscription OnCreateRelationshipCelebrity(
    $filter: ModelSubscriptionRelationshipCelebrityFilterInput
    $owner: String
  ) {
    onCreateRelationshipCelebrity(filter: $filter, owner: $owner) {
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
export const onDeleteCelebrity = /* GraphQL */ `
  subscription OnDeleteCelebrity(
    $filter: ModelSubscriptionCelebrityFilterInput
  ) {
    onDeleteCelebrity(filter: $filter) {
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
export const onDeleteRelationship = /* GraphQL */ `
  subscription OnDeleteRelationship(
    $filter: ModelSubscriptionRelationshipFilterInput
    $owner: String
  ) {
    onDeleteRelationship(filter: $filter, owner: $owner) {
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
export const onDeleteRelationshipCelebrity = /* GraphQL */ `
  subscription OnDeleteRelationshipCelebrity(
    $filter: ModelSubscriptionRelationshipCelebrityFilterInput
    $owner: String
  ) {
    onDeleteRelationshipCelebrity(filter: $filter, owner: $owner) {
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
export const onUpdateCelebrity = /* GraphQL */ `
  subscription OnUpdateCelebrity(
    $filter: ModelSubscriptionCelebrityFilterInput
  ) {
    onUpdateCelebrity(filter: $filter) {
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
export const onUpdateRelationship = /* GraphQL */ `
  subscription OnUpdateRelationship(
    $filter: ModelSubscriptionRelationshipFilterInput
    $owner: String
  ) {
    onUpdateRelationship(filter: $filter, owner: $owner) {
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
export const onUpdateRelationshipCelebrity = /* GraphQL */ `
  subscription OnUpdateRelationshipCelebrity(
    $filter: ModelSubscriptionRelationshipCelebrityFilterInput
    $owner: String
  ) {
    onUpdateRelationshipCelebrity(filter: $filter, owner: $owner) {
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
