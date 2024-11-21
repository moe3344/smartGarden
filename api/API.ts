/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlantModelInput = {
  id?: string | null,
  plantName: string,
  description?: string | null,
  pH?: number | null,
  temperature?: number | null,
  userId: string,
};

export type ModelPlantModelConditionInput = {
  plantName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelPlantModelConditionInput | null > | null,
  or?: Array< ModelPlantModelConditionInput | null > | null,
  not?: ModelPlantModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type plantModel = {
  __typename: "plantModel",
  id: string,
  plantName: string,
  description?: string | null,
  pH?: number | null,
  temperature?: number | null,
  userId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlantModelInput = {
  id: string,
  plantName?: string | null,
  description?: string | null,
  pH?: number | null,
  temperature?: number | null,
  userId?: string | null,
};

export type DeletePlantModelInput = {
  id: string,
};

export type MessageConnection = {
  __typename: "MessageConnection",
  items?:  Array<plantModel | null > | null,
  nextToken?: string | null,
};

export type ModelPlantModelFilterInput = {
  id?: ModelIDInput | null,
  plantName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  userId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlantModelFilterInput | null > | null,
  or?: Array< ModelPlantModelFilterInput | null > | null,
  not?: ModelPlantModelFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPlantModelConnection = {
  __typename: "ModelPlantModelConnection",
  items:  Array<plantModel | null >,
  nextToken?: string | null,
};

export type ModelplantModelFilterInput = {
  id?: ModelIDInput | null,
  plantName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelplantModelFilterInput | null > | null,
  or?: Array< ModelplantModelFilterInput | null > | null,
  not?: ModelplantModelFilterInput | null,
};

export type ModelplantModelConnection = {
  __typename: "ModelplantModelConnection",
  items:  Array<plantModel | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPlantModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  plantName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  pH?: ModelSubscriptionFloatInput | null,
  temperature?: ModelSubscriptionFloatInput | null,
  userId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlantModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlantModelFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreatePlantModelMutationVariables = {
  input: CreatePlantModelInput,
  condition?: ModelPlantModelConditionInput | null,
};

export type CreatePlantModelMutation = {
  createPlantModel?:  {
    __typename: "plantModel",
    id: string,
    plantName: string,
    description?: string | null,
    pH?: number | null,
    temperature?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlantModelMutationVariables = {
  input: UpdatePlantModelInput,
  condition?: ModelPlantModelConditionInput | null,
};

export type UpdatePlantModelMutation = {
  updatePlantModel?:  {
    __typename: "plantModel",
    id: string,
    plantName: string,
    description?: string | null,
    pH?: number | null,
    temperature?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlantModelMutationVariables = {
  input: DeletePlantModelInput,
  condition?: ModelPlantModelConditionInput | null,
};

export type DeletePlantModelMutation = {
  deletePlantModel?:  {
    __typename: "plantModel",
    id: string,
    plantName: string,
    description?: string | null,
    pH?: number | null,
    temperature?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ByUserQueryVariables = {
  userId: string,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByUserQuery = {
  byUser?:  {
    __typename: "MessageConnection",
    items?:  Array< {
      __typename: "plantModel",
      id: string,
      plantName: string,
      description?: string | null,
      pH?: number | null,
      temperature?: number | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPlantModelQueryVariables = {
  id: string,
};

export type GetPlantModelQuery = {
  getPlantModel?:  {
    __typename: "plantModel",
    id: string,
    plantName: string,
    description?: string | null,
    pH?: number | null,
    temperature?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlantModelsQueryVariables = {
  id?: string | null,
  filter?: ModelPlantModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlantModelsQuery = {
  listPlantModels?:  {
    __typename: "ModelPlantModelConnection",
    items:  Array< {
      __typename: "plantModel",
      id: string,
      plantName: string,
      description?: string | null,
      pH?: number | null,
      temperature?: number | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PlantModelsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelplantModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlantModelsByUserIdQuery = {
  plantModelsByUserId?:  {
    __typename: "ModelplantModelConnection",
    items:  Array< {
      __typename: "plantModel",
      id: string,
      plantName: string,
      description?: string | null,
      pH?: number | null,
      temperature?: number | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlantModelSubscriptionVariables = {
  filter?: ModelSubscriptionPlantModelFilterInput | null,
};

export type OnCreatePlantModelSubscription = {
  onCreatePlantModel?:  {
    __typename: "plantModel",
    id: string,
    plantName: string,
    description?: string | null,
    pH?: number | null,
    temperature?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlantModelSubscriptionVariables = {
  filter?: ModelSubscriptionPlantModelFilterInput | null,
};

export type OnUpdatePlantModelSubscription = {
  onUpdatePlantModel?:  {
    __typename: "plantModel",
    id: string,
    plantName: string,
    description?: string | null,
    pH?: number | null,
    temperature?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlantModelSubscriptionVariables = {
  filter?: ModelSubscriptionPlantModelFilterInput | null,
};

export type OnDeletePlantModelSubscription = {
  onDeletePlantModel?:  {
    __typename: "plantModel",
    id: string,
    plantName: string,
    description?: string | null,
    pH?: number | null,
    temperature?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
