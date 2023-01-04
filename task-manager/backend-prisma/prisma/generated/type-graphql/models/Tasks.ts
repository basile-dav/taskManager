import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Assignees } from "../models/Assignees";
import { Comments } from "../models/Comments";
import { Users } from "../models/Users";
import { TaskState } from "../enums/TaskState";
import { TasksCount } from "../resolvers/outputs/TasksCount";

@TypeGraphQL.ObjectType("Tasks", {
  isAbstract: true,
  simpleResolvers: true
})
export class Tasks {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  users?: Users;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  owner_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  due_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => TaskState, {
    nullable: false
  })
  state!: "PENDING" | "IN_PROGRESS" | "DONE";

  assignees?: Assignees | null;

  comments?: Comments[];

  @TypeGraphQL.Field(_type => TasksCount, {
    nullable: true
  })
  _count?: TasksCount | null;
}
