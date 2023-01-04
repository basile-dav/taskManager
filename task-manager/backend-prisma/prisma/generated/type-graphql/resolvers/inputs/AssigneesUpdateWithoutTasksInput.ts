import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersUpdateOneRequiredWithoutAssigneesNestedInput } from "../inputs/UsersUpdateOneRequiredWithoutAssigneesNestedInput";

@TypeGraphQL.InputType("AssigneesUpdateWithoutTasksInput", {
  isAbstract: true
})
export class AssigneesUpdateWithoutTasksInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateOneRequiredWithoutAssigneesNestedInput, {
    nullable: true
  })
  users?: UsersUpdateOneRequiredWithoutAssigneesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
