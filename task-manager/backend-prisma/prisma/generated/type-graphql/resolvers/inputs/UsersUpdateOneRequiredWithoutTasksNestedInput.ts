import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutTasksInput } from "../inputs/UsersCreateOrConnectWithoutTasksInput";
import { UsersCreateWithoutTasksInput } from "../inputs/UsersCreateWithoutTasksInput";
import { UsersUpdateWithoutTasksInput } from "../inputs/UsersUpdateWithoutTasksInput";
import { UsersUpsertWithoutTasksInput } from "../inputs/UsersUpsertWithoutTasksInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutTasksNestedInput", {
  isAbstract: true
})
export class UsersUpdateOneRequiredWithoutTasksNestedInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutTasksInput, {
    nullable: true
  })
  create?: UsersCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutTasksInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutTasksInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutTasksInput | undefined;
}
