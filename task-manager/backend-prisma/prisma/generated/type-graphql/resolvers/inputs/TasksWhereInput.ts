import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesRelationFilter } from "../inputs/AssigneesRelationFilter";
import { CommentsListRelationFilter } from "../inputs/CommentsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTaskStateFilter } from "../inputs/EnumTaskStateFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType("TasksWhereInput", {
  isAbstract: true
})
export class TasksWhereInput {
  @TypeGraphQL.Field(_type => [TasksWhereInput], {
    nullable: true
  })
  AND?: TasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereInput], {
    nullable: true
  })
  OR?: TasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereInput], {
    nullable: true
  })
  NOT?: TasksWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  users?: UsersRelationFilter | undefined;

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

  @TypeGraphQL.Field(_type => AssigneesRelationFilter, {
    nullable: true
  })
  assignees?: AssigneesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsListRelationFilter, {
    nullable: true
  })
  comments?: CommentsListRelationFilter | undefined;
}
