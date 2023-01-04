import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateWithoutUsersInput } from "../inputs/NotificationsCreateWithoutUsersInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class NotificationsCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: NotificationsCreateWithoutUsersInput;
}
