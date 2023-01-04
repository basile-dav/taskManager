import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateManyUsersInput } from "../inputs/TasksCreateManyUsersInput";

@TypeGraphQL.InputType("TasksCreateManyUsersInputEnvelope", {
  isAbstract: true
})
export class TasksCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field(_type => [TasksCreateManyUsersInput], {
    nullable: false
  })
  data!: TasksCreateManyUsersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
