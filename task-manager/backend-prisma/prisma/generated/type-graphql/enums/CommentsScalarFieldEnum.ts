import * as TypeGraphQL from "type-graphql";

export enum CommentsScalarFieldEnum {
  id = "id",
  owner_id = "owner_id",
  target_id = "target_id",
  target_type = "target_type",
  parent_id = "parent_id",
  content = "content",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(CommentsScalarFieldEnum, {
  name: "CommentsScalarFieldEnum",
  description: undefined,
});
