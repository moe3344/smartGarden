/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPlantModel = /* GraphQL */ `mutation CreatePlantModel(
  $input: CreatePlantModelInput!
  $condition: ModelPlantModelConditionInput
) {
  createPlantModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePlantModelMutationVariables,
  APITypes.CreatePlantModelMutation
>;
export const updatePlantModel = /* GraphQL */ `mutation UpdatePlantModel(
  $input: UpdatePlantModelInput!
  $condition: ModelPlantModelConditionInput
) {
  updatePlantModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePlantModelMutationVariables,
  APITypes.UpdatePlantModelMutation
>;
export const deletePlantModel = /* GraphQL */ `mutation DeletePlantModel(
  $input: DeletePlantModelInput!
  $condition: ModelPlantModelConditionInput
) {
  deletePlantModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePlantModelMutationVariables,
  APITypes.DeletePlantModelMutation
>;
