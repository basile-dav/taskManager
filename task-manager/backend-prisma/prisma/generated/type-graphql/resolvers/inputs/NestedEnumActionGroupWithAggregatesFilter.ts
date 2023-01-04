import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumActionGroupFilter } from "../inputs/NestedEnumActionGroupFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ActionGroup } from "../../enums/ActionGroup";

@TypeGraphQL.InputType("NestedEnumActionGroupWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumActionGroupWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ActionGroup, {
    nullable: true
  })
  equals?: "EDIT" | "DELETE" | "CREATE" | undefined;

  @TypeGraphQL.Field(_type => [ActionGroup], {
    nullable: true
  })
  in?: Array<"EDIT" | "DELETE" | "CREATE"> | undefined;

  @TypeGraphQL.Field(_type => [ActionGroup], {
    nullable: true
  })
  notIn?: Array<"EDIT" | "DELETE" | "CREATE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionGroupWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumActionGroupWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionGroupFilter, {
    nullable: true
  })
  _min?: NestedEnumActionGroupFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionGroupFilter, {
    nullable: true
  })
  _max?: NestedEnumActionGroupFilter | undefined;
}
