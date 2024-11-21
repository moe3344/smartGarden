/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const byUser = /* GraphQL */ `query ByUser($userId: String!, $limit: Int, $nextToken: String) {
  byUser(userId: $userId, limit: $limit, nextToken: $nextToken) {
    items {
      id
      plantName
      description
      pH
      temperature
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ByUserQueryVariables, APITypes.ByUserQuery>;
export const getPlantModel = /* GraphQL */ `query GetPlantModel($id: ID!) {
  getPlantModel(id: $id) {
    id
    plantName
    description
    pH
    temperature
    userId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPlantModelQueryVariables,
  APITypes.GetPlantModelQuery
>;
export const listPlantModels = /* GraphQL */ `query ListPlantModels(
  $id: ID
  $filter: ModelPlantModelFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPlantModels(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      plantName
      description
      pH
      temperature
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlantModelsQueryVariables,
  APITypes.ListPlantModelsQuery
>;
export const plantModelsByUserId = /* GraphQL */ `query PlantModelsByUserId(
  $userId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelplantModelFilterInput
  $limit: Int
  $nextToken: String
) {
  plantModelsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      plantName
      description
      pH
      temperature
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PlantModelsByUserIdQueryVariables,
  APITypes.PlantModelsByUserIdQuery
>;
