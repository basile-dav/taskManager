import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutUsersInput } from "../inputs/TasksCreateWithoutUsersInput";
import { TasksUpdateWithoutUsersInput } from "../inputs/TasksUpdateWithoutUsersInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class TasksUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: TasksUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutUsersInput, {
    nullable: false
  })
  create!: TasksCreateWithoutUsersInput;
}
