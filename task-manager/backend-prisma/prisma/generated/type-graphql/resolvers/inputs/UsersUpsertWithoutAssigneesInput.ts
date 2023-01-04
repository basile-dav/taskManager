import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutAssigneesInput } from "../inputs/UsersCreateWithoutAssigneesInput";
import { UsersUpdateWithoutAssigneesInput } from "../inputs/UsersUpdateWithoutAssigneesInput";

@TypeGraphQL.InputType("UsersUpsertWithoutAssigneesInput", {
  isAbstract: true
})
export class UsersUpsertWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutAssigneesInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutAssigneesInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutAssigneesInput, {
    nullable: false
  })
  create!: UsersCreateWithoutAssigneesInput;
}
