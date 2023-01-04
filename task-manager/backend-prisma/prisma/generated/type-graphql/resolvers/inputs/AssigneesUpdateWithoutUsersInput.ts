import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TasksUpdateOneRequiredWithoutAssigneesNestedInput } from "../inputs/TasksUpdateOneRequiredWithoutAssigneesNestedInput";

@TypeGraphQL.InputType("AssigneesUpdateWithoutUsersInput", {
  isAbstract: true
})
export class AssigneesUpdateWithoutUsersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateOneRequiredWithoutAssigneesNestedInput, {
    nullable: true
  })
  tasks?: TasksUpdateOneRequiredWithoutAssigneesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
