import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutTasksInput } from "../inputs/UsersCreateWithoutTasksInput";
import { UsersUpdateWithoutTasksInput } from "../inputs/UsersUpdateWithoutTasksInput";

@TypeGraphQL.InputType("UsersUpsertWithoutTasksInput", {
  isAbstract: true
})
export class UsersUpsertWithoutTasksInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutTasksInput, {
    nullable: false
  })
  create!: UsersCreateWithoutTasksInput;
}
