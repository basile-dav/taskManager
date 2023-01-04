import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumCommentTargetTypeFilter } from "../inputs/EnumCommentTargetTypeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CommentsScalarWhereInput", {
  isAbstract: true
})
export class CommentsScalarWhereInput {
  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  AND?: CommentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  OR?: CommentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  NOT?: CommentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  owner_id?: StringFilter | undefined;

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
