import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateWithoutUsersInput } from "../inputs/AssigneesCreateWithoutUsersInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class AssigneesCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneesCreateWithoutUsersInput, {
    nullable: false
  })
  create!: AssigneesCreateWithoutUsersInput;
}
