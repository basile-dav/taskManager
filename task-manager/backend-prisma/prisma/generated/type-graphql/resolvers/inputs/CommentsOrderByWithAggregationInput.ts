import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCountOrderByAggregateInput } from "../inputs/CommentsCountOrderByAggregateInput";
import { CommentsMaxOrderByAggregateInput } from "../inputs/CommentsMaxOrderByAggregateInput";
import { CommentsMinOrderByAggregateInput } from "../inputs/CommentsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentsOrderByWithAggregationInput", {
  isAbstract: true
})
export class CommentsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  owner_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  target_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  target_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parent_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CommentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CommentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CommentsMinOrderByAggregateInput | undefined;
}
