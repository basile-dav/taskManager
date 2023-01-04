import * as TypeGraphQL from "type-graphql";

export enum TasksScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  owner_id = "owner_id",
  due_at = "due_at",
  created_at = "created_at",
  updated_at = "updated_at",
  state = "state"
}
TypeGraphQL.registerEnumType(TasksScalarFieldEnum, {
  name: "TasksScalarFieldEnum",
  description: undefined,
});
