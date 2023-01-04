import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Tasks } from "../models/Tasks";
import { Users } from "../models/Users";

@TypeGraphQL.ObjectType("Assignees", {
  isAbstract: true,
  simpleResolvers: true
})
export class Assignees {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  tasks?: Tasks;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  task_id!: string;

  users?: Users;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;
}
