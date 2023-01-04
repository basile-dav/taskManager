import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionTargetType } from "../../enums/ActionTargetType";

@TypeGraphQL.InputType("NestedEnumActionTargetTypeFilter", {
  isAbstract: true
})
export class NestedEnumActionTargetTypeFilter {
  @TypeGraphQL.Field(_type => ActionTargetType, {
    nullable: true
  })
  equals?: "TASK" | "COMMENT" | undefined;

  @TypeGraphQL.Field(_type => [ActionTargetType], {
    nullable: true
  })
  in?: Array<"TASK" | "COMMENT"> | undefined;

  @TypeGraphQL.Field(_type => [ActionTargetType], {
    nullable: true
  })
  notIn?: Array<"TASK" | "COMMENT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionTargetTypeFilter, {
    nullable: true
  })
  not?: NestedEnumActionTargetTypeFilter | undefined;
}
