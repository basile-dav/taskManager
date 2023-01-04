import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateNestedOneWithoutNotificationsInput } from "../inputs/UsersCreateNestedOneWithoutNotificationsInput";

@TypeGraphQL.InputType("NotificationsCreateWithoutActionsInput", {
  isAbstract: true
})
export class NotificationsCreateWithoutActionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutNotificationsInput, {
    nullable: true
  })
  users?: UsersCreateNestedOneWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;
}
