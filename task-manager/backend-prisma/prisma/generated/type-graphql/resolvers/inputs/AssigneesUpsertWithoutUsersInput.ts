import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateWithoutUsersInput } from "../inputs/AssigneesCreateWithoutUsersInput";
import { AssigneesUpdateWithoutUsersInput } from "../inputs/AssigneesUpdateWithoutUsersInput";

@TypeGraphQL.InputType("AssigneesUpsertWithoutUsersInput", {
  isAbstract: true
})
export class AssigneesUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => AssigneesUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: AssigneesUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => AssigneesCreateWithoutUsersInput, {
    nullable: false
  })
  create!: AssigneesCreateWithoutUsersInput;
}
