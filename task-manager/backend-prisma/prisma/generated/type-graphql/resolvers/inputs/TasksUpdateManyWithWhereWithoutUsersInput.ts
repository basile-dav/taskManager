import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksScalarWhereInput } from "../inputs/TasksScalarWhereInput";
import { TasksUpdateManyMutationInput } from "../inputs/TasksUpdateManyMutationInput";

@TypeGraphQL.InputType("TasksUpdateManyWithWhereWithoutUsersInput", {
  isAbstract: true
})
export class TasksUpdateManyWithWhereWithoutUsersInput {
  @TypeGraphQL.Field(_type => TasksScalarWhereInput, {
    nullable: false
  })
  where!: TasksScalarWhereInput;

  @TypeGraphQL.Field(_type => TasksUpdateManyMutationInput, {
    nullable: false
  })
  data!: TasksUpdateManyMutationInput;
}
