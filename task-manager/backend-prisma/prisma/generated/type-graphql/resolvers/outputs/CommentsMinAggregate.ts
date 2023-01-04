import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentTargetType } from "../../enums/CommentTargetType";

@TypeGraphQL.ObjectType("CommentsMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class CommentsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  owner_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  target_id!: string | null;

  @TypeGraphQL.Field(_type => CommentTargetType, {
    nullable: true
  })
  target_type!: "COMMENT_NEW" | "COMMENT_REPLY" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parent_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;
}
