import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateNestedOneWithoutCommentsInput } from "../inputs/TasksCreateNestedOneWithoutCommentsInput";
import { CommentTargetType } from "../../enums/CommentTargetType";

@TypeGraphQL.InputType("CommentsCreateWithoutUsersInput", {
  isAbstract: true
})
export class CommentsCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TasksCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  tasks?: TasksCreateNestedOneWithoutCommentsInput | undefined;

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
