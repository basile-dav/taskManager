import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateManyUsersInputEnvelope } from "../inputs/TasksCreateManyUsersInputEnvelope";
import { TasksCreateOrConnectWithoutUsersInput } from "../inputs/TasksCreateOrConnectWithoutUsersInput";
import { TasksCreateWithoutUsersInput } from "../inputs/TasksCreateWithoutUsersInput";
import { TasksScalarWhereInput } from "../inputs/TasksScalarWhereInput";
import { TasksUpdateManyWithWhereWithoutUsersInput } from "../inputs/TasksUpdateManyWithWhereWithoutUsersInput";
import { TasksUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/TasksUpdateWithWhereUniqueWithoutUsersInput";
import { TasksUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/TasksUpsertWithWhereUniqueWithoutUsersInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class TasksUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [TasksCreateWithoutUsersInput], {
    nullable: true
  })
  create?: TasksCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: TasksUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => TasksCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: TasksCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  set?: TasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  delete?: TasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  connect?: TasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: TasksUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: TasksUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TasksScalarWhereInput[] | undefined;
}
