import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentTargetType } from "../../enums/CommentTargetType";

@TypeGraphQL.InputType("CommentsCreateManyInput", {
  isAbstract: true
})
export class CommentsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  owner_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  target_id?: string | undefined;

  @TypeGraphQL.Field(_type => CommentTargetType, {
    nullable: false
  })
  target_type!: "COMMENT_NEW" | "COMMENT_REPLY";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parent_id?: string | undefined;

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
}
