import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumActionGroupWithAggregatesFilter } from "../inputs/EnumActionGroupWithAggregatesFilter";
import { EnumActionNameWithAggregatesFilter } from "../inputs/EnumActionNameWithAggregatesFilter";
import { EnumActionTargetTypeWithAggregatesFilter } from "../inputs/EnumActionTargetTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActionsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ActionsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ActionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ActionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ActionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ActionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumActionGroupWithAggregatesFilter, {
    nullable: true
  })
  group?: EnumActionGroupWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumActionNameWithAggregatesFilter, {
    nullable: true
  })
  name?: EnumActionNameWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  target_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumActionTargetTypeWithAggregatesFilter, {
    nullable: true
  })
  target_type?: EnumActionTargetTypeWithAggregatesFilter | undefined;
}
