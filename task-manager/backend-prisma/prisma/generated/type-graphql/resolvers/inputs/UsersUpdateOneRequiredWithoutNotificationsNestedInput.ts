import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutNotificationsInput } from "../inputs/UsersCreateOrConnectWithoutNotificationsInput";
import { UsersCreateWithoutNotificationsInput } from "../inputs/UsersCreateWithoutNotificationsInput";
import { UsersUpdateWithoutNotificationsInput } from "../inputs/UsersUpdateWithoutNotificationsInput";
import { UsersUpsertWithoutNotificationsInput } from "../inputs/UsersUpsertWithoutNotificationsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutNotificationsNestedInput", {
  isAbstract: true
})
export class UsersUpdateOneRequiredWithoutNotificationsNestedInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutNotificationsInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutNotificationsInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutNotificationsInput | undefined;
}
