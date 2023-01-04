import * as TypeGraphQL from "type-graphql";

export enum CommentTargetType {
  COMMENT_NEW = "COMMENT_NEW",
  COMMENT_REPLY = "COMMENT_REPLY"
}
TypeGraphQL.registerEnumType(CommentTargetType, {
  name: "CommentTargetType",
  description: undefined,
});
