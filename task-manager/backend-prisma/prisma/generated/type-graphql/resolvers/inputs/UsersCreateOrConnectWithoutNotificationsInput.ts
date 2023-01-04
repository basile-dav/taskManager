import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutNotificationsInput } from "../inputs/UsersCreateWithoutNotificationsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutNotificationsInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutNotificationsInput;
}
