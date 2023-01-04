import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCountAggregate } from "../outputs/CommentsCountAggregate";
import { CommentsMaxAggregate } from "../outputs/CommentsMaxAggregate";
import { CommentsMinAggregate } from "../outputs/CommentsMinAggregate";
import { CommentTargetType } from "../../enums/CommentTargetType";

@TypeGraphQL.ObjectType("CommentsGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class CommentsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  owner_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  target_id!: string;

  @TypeGraphQL.Field(_type => CommentTargetType, {
    nullable: false
  })
  target_type!: "COMMENT_NEW" | "COMMENT_REPLY";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  parent_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => CommentsCountAggregate, {
    nullable: true
  })
  _count!: CommentsCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentsMinAggregate, {
    nullable: true
  })
  _min!: CommentsMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentsMaxAggregate, {
    nullable: true
  })
  _max!: CommentsMaxAggregate | null;
}
