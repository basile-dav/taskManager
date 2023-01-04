import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutAssigneesInput } from "../inputs/UsersCreateOrConnectWithoutAssigneesInput";
import { UsersCreateWithoutAssigneesInput } from "../inputs/UsersCreateWithoutAssigneesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutAssigneesInput", {
  isAbstract: true
})
export class UsersCreateNestedOneWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutAssigneesInput, {
    nullable: true
  })
  create?: UsersCreateWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutAssigneesInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
