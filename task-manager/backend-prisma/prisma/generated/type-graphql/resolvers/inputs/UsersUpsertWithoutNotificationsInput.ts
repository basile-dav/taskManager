import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutNotificationsInput } from "../inputs/UsersCreateWithoutNotificationsInput";
import { UsersUpdateWithoutNotificationsInput } from "../inputs/UsersUpdateWithoutNotificationsInput";

@TypeGraphQL.InputType("UsersUpsertWithoutNotificationsInput", {
  isAbstract: true
})
export class UsersUpsertWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutNotificationsInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutNotificationsInput;
}
