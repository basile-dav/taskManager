import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsUpdateOneRequiredWithoutNotificationsNestedInput } from "../inputs/ActionsUpdateOneRequiredWithoutNotificationsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersUpdateOneRequiredWithoutNotificationsNestedInput } from "../inputs/UsersUpdateOneRequiredWithoutNotificationsNestedInput";

@TypeGraphQL.InputType("NotificationsUpdateInput", {
  isAbstract: true
})
export class NotificationsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateOneRequiredWithoutNotificationsNestedInput, {
    nullable: true
  })
  users?: UsersUpdateOneRequiredWithoutNotificationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ActionsUpdateOneRequiredWithoutNotificationsNestedInput, {
    nullable: true
  })
  actions?: ActionsUpdateOneRequiredWithoutNotificationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  readed_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
