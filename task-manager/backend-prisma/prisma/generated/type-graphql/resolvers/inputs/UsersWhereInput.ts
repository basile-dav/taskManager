import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesRelationFilter } from "../inputs/AssigneesRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CommentsListRelationFilter } from "../inputs/CommentsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { NotificationsListRelationFilter } from "../inputs/NotificationsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TasksListRelationFilter } from "../inputs/TasksListRelationFilter";

@TypeGraphQL.InputType("UsersWhereInput", {
  isAbstract: true
})
export class UsersWhereInput {
  @TypeGraphQL.Field(_type => [UsersWhereInput], {
    nullable: true
  })
  AND?: UsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersWhereInput], {
    nullable: true
  })
  OR?: UsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersWhereInput], {
    nullable: true
  })
  NOT?: UsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableFilter, {
    nullable: true
  })
  preferences?: JsonNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_sign_in_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => AssigneesRelationFilter, {
    nullable: true
  })
  assignees?: AssigneesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TasksListRelationFilter, {
    nullable: true
  })
  tasks?: TasksListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationsListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsListRelationFilter, {
    nullable: true
  })
  comments?: CommentsListRelationFilter | undefined;
}
