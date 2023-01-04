import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTaskStateFilter } from "../inputs/EnumTaskStateFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TasksScalarWhereInput", {
  isAbstract: true
})
export class TasksScalarWhereInput {
  @TypeGraphQL.Field(_type => [TasksScalarWhereInput], {
    nullable: true
  })
  AND?: TasksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereInput], {
    nullable: true
  })
  OR?: TasksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereInput], {
    nullable: true
  })
  NOT?: TasksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  owner_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  due_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTaskStateFilter, {
    nullable: true
  })
  state?: EnumTaskStateFilter | undefined;
}
