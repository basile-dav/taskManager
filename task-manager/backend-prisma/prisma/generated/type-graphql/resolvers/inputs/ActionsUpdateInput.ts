import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumActionGroupFieldUpdateOperationsInput } from "../inputs/EnumActionGroupFieldUpdateOperationsInput";
import { EnumActionNameFieldUpdateOperationsInput } from "../inputs/EnumActionNameFieldUpdateOperationsInput";
import { EnumActionTargetTypeFieldUpdateOperationsInput } from "../inputs/EnumActionTargetTypeFieldUpdateOperationsInput";
import { NotificationsUpdateManyWithoutActionsNestedInput } from "../inputs/NotificationsUpdateManyWithoutActionsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionsUpdateInput", {
  isAbstract: true
})
export class ActionsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumActionGroupFieldUpdateOperationsInput, {
    nullable: true
  })
  group?: EnumActionGroupFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumActionNameFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumActionNameFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  target_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumActionTargetTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  target_type?: EnumActionTargetTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsUpdateManyWithoutActionsNestedInput, {
    nullable: true
  })
  notifications?: NotificationsUpdateManyWithoutActionsNestedInput | undefined;
}
