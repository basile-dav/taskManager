import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Tasks } from "../models/Tasks";
import { Users } from "../models/Users";
import { CommentTargetType } from "../enums/CommentTargetType";

@TypeGraphQL.ObjectType("Comments", {
  isAbstract: true,
  simpleResolvers: true
})
export class Comments {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  users?: Users;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  owner_id!: string;

  tasks?: Tasks;

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
}
