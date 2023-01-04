import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateWithoutUsersInput } from "../inputs/NotificationsCreateWithoutUsersInput";
import { NotificationsUpdateWithoutUsersInput } from "../inputs/NotificationsUpdateWithoutUsersInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class NotificationsUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: NotificationsUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => NotificationsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: NotificationsCreateWithoutUsersInput;
}
