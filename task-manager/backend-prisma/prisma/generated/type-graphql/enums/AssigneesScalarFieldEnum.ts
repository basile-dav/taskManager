import * as TypeGraphQL from "type-graphql";

export enum AssigneesScalarFieldEnum {
  id = "id",
  task_id = "task_id",
  user_id = "user_id",
  created_at = "created_at"
}
TypeGraphQL.registerEnumType(AssigneesScalarFieldEnum, {
  name: "AssigneesScalarFieldEnum",
  description: undefined,
});
