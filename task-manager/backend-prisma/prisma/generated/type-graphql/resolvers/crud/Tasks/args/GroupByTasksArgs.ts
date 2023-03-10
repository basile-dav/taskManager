import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TasksOrderByWithAggregationInput } from "../../../inputs/TasksOrderByWithAggregationInput";
import { TasksScalarWhereWithAggregatesInput } from "../../../inputs/TasksScalarWhereWithAggregatesInput";
import { TasksWhereInput } from "../../../inputs/TasksWhereInput";
import { TasksScalarFieldEnum } from "../../../../enums/TasksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTasksArgs {
  @TypeGraphQL.Field(_type => TasksWhereInput, {
    nullable: true
  })
  where?: TasksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TasksOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TasksOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "owner_id" | "due_at" | "created_at" | "updated_at" | "state">;

  @TypeGraphQL.Field(_type => TasksScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TasksScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
