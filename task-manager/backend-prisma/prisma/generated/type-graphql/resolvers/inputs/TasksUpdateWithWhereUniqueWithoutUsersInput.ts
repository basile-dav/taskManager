import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksUpdateWithoutUsersInput } from "../inputs/TasksUpdateWithoutUsersInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class TasksUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: TasksUpdateWithoutUsersInput;
}
