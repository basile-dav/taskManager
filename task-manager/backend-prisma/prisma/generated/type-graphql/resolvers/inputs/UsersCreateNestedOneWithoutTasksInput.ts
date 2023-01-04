import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutTasksInput } from "../inputs/UsersCreateOrConnectWithoutTasksInput";
import { UsersCreateWithoutTasksInput } from "../inputs/UsersCreateWithoutTasksInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutTasksInput", {
  isAbstract: true
})
export class UsersCreateNestedOneWithoutTasksInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutTasksInput, {
    nullable: true
  })
  create?: UsersCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
