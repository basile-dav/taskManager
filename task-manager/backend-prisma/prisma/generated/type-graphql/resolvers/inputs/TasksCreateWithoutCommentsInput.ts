import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateNestedOneWithoutTasksInput } from "../inputs/AssigneesCreateNestedOneWithoutTasksInput";
import { UsersCreateNestedOneWithoutTasksInput } from "../inputs/UsersCreateNestedOneWithoutTasksInput";
import { TaskState } from "../../enums/TaskState";

@TypeGraphQL.InputType("TasksCreateWithoutCommentsInput", {
  isAbstract: true
})
export class TasksCreateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutTasksInput, {
    nullable: true
  })
  users?: UsersCreateNestedOneWithoutTasksInput | undefined;

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

  @TypeGraphQL.Field(_type => AssigneesCreateNestedOneWithoutTasksInput, {
    nullable: true
  })
  assignees?: AssigneesCreateNestedOneWithoutTasksInput | undefined;
}
