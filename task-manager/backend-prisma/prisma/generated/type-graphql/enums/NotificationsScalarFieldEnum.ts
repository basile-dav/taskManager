import * as TypeGraphQL from "type-graphql";

export enum NotificationsScalarFieldEnum {
  id = "id",
  user_id = "user_id",
  action_id = "action_id",
  readed_at = "readed_at"
}
TypeGraphQL.registerEnumType(NotificationsScalarFieldEnum, {
  name: "NotificationsScalarFieldEnum",
  description: undefined,
});
