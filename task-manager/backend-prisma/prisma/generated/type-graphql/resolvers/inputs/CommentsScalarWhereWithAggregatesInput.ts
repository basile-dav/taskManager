import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumCommentTargetTypeWithAggregatesFilter } from "../inputs/EnumCommentTargetTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CommentsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CommentsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CommentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CommentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CommentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CommentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  owner_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  target_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumCommentTargetTypeWithAggregatesFilter, {
    nullable: true
  })
  target_type?: EnumCommentTargetTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  parent_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;
}
