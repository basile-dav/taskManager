import * as TypeGraphQL from "type-graphql";

export enum TaskState {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE"
}
TypeGraphQL.registerEnumType(TaskState, {
  name: "TaskState",
  description: undefined,
});
