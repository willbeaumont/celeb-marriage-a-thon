/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCelebrity = /* GraphQL */ `
  query GetCelebrity($id: ID!) {
    getCelebrity(id: $id) {
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
export const getRelationship = /* GraphQL */ `
  query GetRelationship($id: ID!) {
    getRelationship(id: $id) {
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
export const getRelationshipCelebrity = /* GraphQL */ `
  query GetRelationshipCelebrity($id: ID!) {
    getRelationshipCelebrity(id: $id) {
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
export const listCelebrities = /* GraphQL */ `
  query ListCelebrities(
    $filter: ModelCelebrityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCelebrities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listRelationshipCelebrities = /* GraphQL */ `
  query ListRelationshipCelebrities(
    $filter: ModelRelationshipCelebrityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRelationshipCelebrities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        celebrityId
        createdAt
        id
        owner
        relationshipId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listRelationships = /* GraphQL */ `
  query ListRelationships(
    $filter: ModelRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRelationships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
