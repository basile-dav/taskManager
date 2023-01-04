import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutUsersInput } from "../inputs/TasksCreateWithoutUsersInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class TasksCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutUsersInput, {
    nullable: false
  })
  create!: TasksCreateWithoutUsersInput;
}
