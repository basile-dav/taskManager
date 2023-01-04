import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumActionGroupFieldUpdateOperationsInput } from "../inputs/EnumActionGroupFieldUpdateOperationsInput";
import { EnumActionNameFieldUpdateOperationsInput } from "../inputs/EnumActionNameFieldUpdateOperationsInput";
import { EnumActionTargetTypeFieldUpdateOperationsInput } from "../inputs/EnumActionTargetTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionsUpdateManyMutationInput", {
  isAbstract: true
})
export class ActionsUpdateManyMutationInput {
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
}
