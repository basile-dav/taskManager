import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesUpdateOneWithoutTasksNestedInput } from "../inputs/AssigneesUpdateOneWithoutTasksNestedInput";
import { CommentsUpdateManyWithoutTasksNestedInput } from "../inputs/CommentsUpdateManyWithoutTasksNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTaskStateFieldUpdateOperationsInput } from "../inputs/EnumTaskStateFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TasksUpdateWithoutUsersInput", {
  isAbstract: true
})
export class TasksUpdateWithoutUsersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  due_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTaskStateFieldUpdateOperationsInput, {
    nullable: true
  })
  state?: EnumTaskStateFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesUpdateOneWithoutTasksNestedInput, {
    nullable: true
  })
  assignees?: AssigneesUpdateOneWithoutTasksNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpdateManyWithoutTasksNestedInput, {
    nullable: true
  })
  comments?: CommentsUpdateManyWithoutTasksNestedInput | undefined;
}
