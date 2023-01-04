import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateNestedOneWithoutNotificationsInput } from "../inputs/ActionsCreateNestedOneWithoutNotificationsInput";
import { UsersCreateNestedOneWithoutNotificationsInput } from "../inputs/UsersCreateNestedOneWithoutNotificationsInput";

@TypeGraphQL.InputType("NotificationsCreateInput", {
  isAbstract: true
})
export class NotificationsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutNotificationsInput, {
    nullable: true
  })
  users?: UsersCreateNestedOneWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionsCreateNestedOneWithoutNotificationsInput, {
    nullable: true
  })
  actions?: ActionsCreateNestedOneWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;
}
