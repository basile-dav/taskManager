import * as TypeGraphQL from "type-graphql";

export enum ActionGroup {
  EDIT = "EDIT",
  DELETE = "DELETE",
  CREATE = "CREATE"
}
TypeGraphQL.registerEnumType(ActionGroup, {
  name: "ActionGroup",
  description: undefined,
});
