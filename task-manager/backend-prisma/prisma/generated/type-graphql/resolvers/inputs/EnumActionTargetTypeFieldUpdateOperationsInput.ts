import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionTargetType } from "../../enums/ActionTargetType";

@TypeGraphQL.InputType("EnumActionTargetTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumActionTargetTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ActionTargetType, {
    nullable: true
  })
  set?: "TASK" | "COMMENT" | undefined;
}
