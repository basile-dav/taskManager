import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AssigneesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AssigneesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AssigneesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AssigneesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AssigneesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AssigneesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  task_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;
}
