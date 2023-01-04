import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumCommentTargetTypeFilter } from "../inputs/NestedEnumCommentTargetTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { CommentTargetType } from "../../enums/CommentTargetType";

@TypeGraphQL.InputType("NestedEnumCommentTargetTypeWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumCommentTargetTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumCommentTargetTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumCommentTargetTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumCommentTargetTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumCommentTargetTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumCommentTargetTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumCommentTargetTypeFilter | undefined;
}
