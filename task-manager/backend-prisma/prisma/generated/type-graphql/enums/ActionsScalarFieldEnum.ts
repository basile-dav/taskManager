import * as TypeGraphQL from "type-graphql";

export enum ActionsScalarFieldEnum {
  id = "id",
  group = "group",
  name = "name",
  target_id = "target_id",
  target_type = "target_type"
}
TypeGraphQL.registerEnumType(ActionsScalarFieldEnum, {
  name: "ActionsScalarFieldEnum",
  description: undefined,
});
