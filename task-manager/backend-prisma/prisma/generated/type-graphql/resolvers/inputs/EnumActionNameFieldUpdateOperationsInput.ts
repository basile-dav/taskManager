import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionName } from "../../enums/ActionName";

@TypeGraphQL.InputType("EnumActionNameFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumActionNameFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ActionName, {
    nullable: true
  })
  set?: "TASK_CREATE" | "TASK_ASSIGN" | "TASK_STATE_PENDING" | "TASK_STATE_INPROGRESS" | "TASK_STATE_DONE" | "COMMENT_CREATE" | "COMMENT_REPLY" | undefined;
}
