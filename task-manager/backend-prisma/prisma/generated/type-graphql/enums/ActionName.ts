import * as TypeGraphQL from "type-graphql";

export enum ActionName {
  TASK_CREATE = "TASK_CREATE",
  TASK_ASSIGN = "TASK_ASSIGN",
  TASK_STATE_PENDING = "TASK_STATE_PENDING",
  TASK_STATE_INPROGRESS = "TASK_STATE_INPROGRESS",
  TASK_STATE_DONE = "TASK_STATE_DONE",
  COMMENT_CREATE = "COMMENT_CREATE",
  COMMENT_REPLY = "COMMENT_REPLY"
}
TypeGraphQL.registerEnumType(ActionName, {
  name: "ActionName",
  description: undefined,
});
