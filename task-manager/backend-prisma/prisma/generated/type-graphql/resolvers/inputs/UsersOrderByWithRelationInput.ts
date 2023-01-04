import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesOrderByWithRelationInput } from "../inputs/AssigneesOrderByWithRelationInput";
import { CommentsOrderByRelationAggregateInput } from "../inputs/CommentsOrderByRelationAggregateInput";
import { NotificationsOrderByRelationAggregateInput } from "../inputs/NotificationsOrderByRelationAggregateInput";
import { TasksOrderByRelationAggregateInput } from "../inputs/TasksOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UsersOrderByWithRelationInput", {
  isAbstract: true
})
export class UsersOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  preferences?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_sign_in_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AssigneesOrderByWithRelationInput, {
    nullable: true
  })
  assignees?: AssigneesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TasksOrderByRelationAggregateInput, {
    nullable: true
  })
  tasks?: TasksOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsOrderByRelationAggregateInput, {
    nullable: true
  })
  notifications?: NotificationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentsOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: CommentsOrderByRelationAggregateInput | undefined;
}
