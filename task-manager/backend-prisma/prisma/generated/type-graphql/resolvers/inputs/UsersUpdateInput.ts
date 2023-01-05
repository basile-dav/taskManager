import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesUpdateOneWithoutUsersNestedInput } from "../inputs/AssigneesUpdateOneWithoutUsersNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentsUpdateManyWithoutUsersNestedInput } from "../inputs/CommentsUpdateManyWithoutUsersNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NotificationsUpdateManyWithoutUsersNestedInput } from "../inputs/NotificationsUpdateManyWithoutUsersNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TasksUpdateManyWithoutUsersNestedInput } from "../inputs/TasksUpdateManyWithoutUsersNestedInput";

@TypeGraphQL.InputType("UsersUpdateInput", {
  isAbstract: true
})
export class UsersUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  preferences?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_sign_in_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesUpdateOneWithoutUsersNestedInput, {
    nullable: true
  })
  assignees?: AssigneesUpdateOneWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  tasks?: TasksUpdateManyWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  notifications?: NotificationsUpdateManyWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  comments?: CommentsUpdateManyWithoutUsersNestedInput | undefined;
}
