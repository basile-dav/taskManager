import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumActionTargetTypeFilter } from "../inputs/NestedEnumActionTargetTypeFilter";
import { NestedEnumActionTargetTypeWithAggregatesFilter } from "../inputs/NestedEnumActionTargetTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ActionTargetType } from "../../enums/ActionTargetType";

@TypeGraphQL.InputType("EnumActionTargetTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumActionTargetTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumActionTargetTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumActionTargetTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionTargetTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumActionTargetTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionTargetTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumActionTargetTypeFilter | undefined;
}
