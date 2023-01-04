import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutAssigneesInput } from "../inputs/UsersCreateWithoutAssigneesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutAssigneesInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutAssigneesInput, {
    nullable: false
  })
  create!: UsersCreateWithoutAssigneesInput;
}
