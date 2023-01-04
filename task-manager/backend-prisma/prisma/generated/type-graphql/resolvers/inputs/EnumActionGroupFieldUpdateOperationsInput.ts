import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionGroup } from "../../enums/ActionGroup";

@TypeGraphQL.InputType("EnumActionGroupFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumActionGroupFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ActionGroup, {
    nullable: true
  })
  set?: "EDIT" | "DELETE" | "CREATE" | undefined;
}
