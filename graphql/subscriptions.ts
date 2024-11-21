/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePlantModel = /* GraphQL */ `subscription OnCreatePlantModel(
  $filter: ModelSubscriptionPlantModelFilterInput
) {
  onCreatePlantModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlantModelSubscriptionVariables,
  APITypes.OnCreatePlantModelSubscription
>;
export const onUpdatePlantModel = /* GraphQL */ `subscription OnUpdatePlantModel(
  $filter: ModelSubscriptionPlantModelFilterInput
) {
  onUpdatePlantModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlantModelSubscriptionVariables,
  APITypes.OnUpdatePlantModelSubscription
>;
export const onDeletePlantModel = /* GraphQL */ `subscription OnDeletePlantModel(
  $filter: ModelSubscriptionPlantModelFilterInput
) {
  onDeletePlantModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlantModelSubscriptionVariables,
  APITypes.OnDeletePlantModelSubscription
>;
