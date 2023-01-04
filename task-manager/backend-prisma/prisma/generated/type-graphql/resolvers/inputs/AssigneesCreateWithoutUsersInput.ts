import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateNestedOneWithoutAssigneesInput } from "../inputs/TasksCreateNestedOneWithoutAssigneesInput";

@TypeGraphQL.InputType("AssigneesCreateWithoutUsersInput", {
  isAbstract: true
})
export class AssigneesCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TasksCreateNestedOneWithoutAssigneesInput, {
    nullable: true
  })
  tasks?: TasksCreateNestedOneWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;
}
