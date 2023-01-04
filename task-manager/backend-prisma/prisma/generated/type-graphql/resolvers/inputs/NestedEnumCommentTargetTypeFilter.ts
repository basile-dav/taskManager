import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentTargetType } from "../../enums/CommentTargetType";

@TypeGraphQL.InputType("NestedEnumCommentTargetTypeFilter", {
  isAbstract: true
})
export class NestedEnumCommentTargetTypeFilter {
  @TypeGraphQL.Field(_type => CommentTargetType, {
    nullable: true
  })
  equals?: "COMMENT_NEW" | "COMMENT_REPLY" | undefined;

  @TypeGraphQL.Field(_type => [CommentTargetType], {
    nullable: true
  })
  in?: Array<"COMMENT_NEW" | "COMMENT_REPLY"> | undefined;

  @TypeGraphQL.Field(_type => [CommentTargetType], {
    nullable: true
  })
  notIn?: Array<"COMMENT_NEW" | "COMMENT_REPLY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumCommentTargetTypeFilter, {
    nullable: true
  })
  not?: NestedEnumCommentTargetTypeFilter | undefined;
}
