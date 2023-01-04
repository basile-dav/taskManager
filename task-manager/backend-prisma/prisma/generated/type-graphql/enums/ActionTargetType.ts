import * as TypeGraphQL from "type-graphql";

export enum ActionTargetType {
  TASK = "TASK",
  COMMENT = "COMMENT"
}
TypeGraphQL.registerEnumType(ActionTargetType, {
  name: "ActionTargetType",
  description: undefined,
});
