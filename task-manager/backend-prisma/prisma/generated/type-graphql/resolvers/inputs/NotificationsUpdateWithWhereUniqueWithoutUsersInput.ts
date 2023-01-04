import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsUpdateWithoutUsersInput } from "../inputs/NotificationsUpdateWithoutUsersInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class NotificationsUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: NotificationsUpdateWithoutUsersInput;
}
