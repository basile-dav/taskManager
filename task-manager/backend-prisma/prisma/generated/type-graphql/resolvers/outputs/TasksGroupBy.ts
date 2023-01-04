import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCountAggregate } from "../outputs/TasksCountAggregate";
import { TasksMaxAggregate } from "../outputs/TasksMaxAggregate";
import { TasksMinAggregate } from "../outputs/TasksMinAggregate";
import { TaskState } from "../../enums/TaskState";

@TypeGraphQL.ObjectType("TasksGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class TasksGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  owner_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  due_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => TaskState, {
    nullable: false
  })
  state!: "PENDING" | "IN_PROGRESS" | "DONE";

  @TypeGraphQL.Field(_type => TasksCountAggregate, {
    nullable: true
  })
  _count!: TasksCountAggregate | null;

  @TypeGraphQL.Field(_type => TasksMinAggregate, {
    nullable: true
  })
  _min!: TasksMinAggregate | null;

  @TypeGraphQL.Field(_type => TasksMaxAggregate, {
    nullable: true
  })
  _max!: TasksMaxAggregate | null;
}
