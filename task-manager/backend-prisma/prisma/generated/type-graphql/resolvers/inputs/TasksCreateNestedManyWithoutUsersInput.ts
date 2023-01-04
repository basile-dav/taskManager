import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateManyUsersInputEnvelope } from "../inputs/TasksCreateManyUsersInputEnvelope";
import { TasksCreateOrConnectWithoutUsersInput } from "../inputs/TasksCreateOrConnectWithoutUsersInput";
import { TasksCreateWithoutUsersInput } from "../inputs/TasksCreateWithoutUsersInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class TasksCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [TasksCreateWithoutUsersInput], {
    nullable: true
  })
  create?: TasksCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => TasksCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: TasksCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  connect?: TasksWhereUniqueInput[] | undefined;
}
