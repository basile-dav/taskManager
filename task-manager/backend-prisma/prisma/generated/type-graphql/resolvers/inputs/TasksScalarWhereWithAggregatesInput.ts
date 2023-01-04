import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTaskStateWithAggregatesFilter } from "../inputs/EnumTaskStateWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TasksScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TasksScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TasksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TasksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TasksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  owner_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  due_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTaskStateWithAggregatesFilter, {
    nullable: true
  })
  state?: EnumTaskStateWithAggregatesFilter | undefined;
}
