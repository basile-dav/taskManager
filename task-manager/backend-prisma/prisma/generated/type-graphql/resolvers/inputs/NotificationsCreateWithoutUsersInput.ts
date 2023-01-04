import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateNestedOneWithoutNotificationsInput } from "../inputs/ActionsCreateNestedOneWithoutNotificationsInput";

@TypeGraphQL.InputType("NotificationsCreateWithoutUsersInput", {
  isAbstract: true
})
export class NotificationsCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ActionsCreateNestedOneWithoutNotificationsInput, {
    nullable: true
  })
  actions?: ActionsCreateNestedOneWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;
}
