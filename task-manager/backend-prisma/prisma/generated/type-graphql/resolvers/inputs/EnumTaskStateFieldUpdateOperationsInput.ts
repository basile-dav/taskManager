import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskState } from "../../enums/TaskState";

@TypeGraphQL.InputType("EnumTaskStateFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumTaskStateFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TaskState, {
    nullable: true
  })
  set?: "PENDING" | "IN_PROGRESS" | "DONE" | undefined;
}
