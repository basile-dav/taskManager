import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumCommentTargetTypeFilter } from "../inputs/EnumCommentTargetTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TasksRelationFilter } from "../inputs/TasksRelationFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType("CommentsWhereInput", {
  isAbstract: true
})
export class CommentsWhereInput {
  @TypeGraphQL.Field(_type => [CommentsWhereInput], {
    nullable: true
  })
  AND?: CommentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereInput], {
    nullable: true
  })
  OR?: CommentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereInput], {
    nullable: true
  })
  NOT?: CommentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  users?: UsersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  owner_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TasksRelationFilter, {
    nullable: true
  })
  tasks?: TasksRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  target_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumCommentTargetTypeFilter, {
    nullable: true
  })
  target_type?: EnumCommentTargetTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  parent_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;
}
