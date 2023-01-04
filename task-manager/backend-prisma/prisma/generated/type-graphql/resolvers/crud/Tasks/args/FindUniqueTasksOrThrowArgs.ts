import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TasksWhereUniqueInput } from "../../../inputs/TasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTasksOrThrowArgs {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;
}
