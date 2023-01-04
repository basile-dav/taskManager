import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateOrConnectWithoutUsersInput } from "../inputs/AssigneesCreateOrConnectWithoutUsersInput";
import { AssigneesCreateWithoutUsersInput } from "../inputs/AssigneesCreateWithoutUsersInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class AssigneesCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => AssigneesCreateWithoutUsersInput, {
    nullable: true
  })
  create?: AssigneesCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: AssigneesCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: true
  })
  connect?: AssigneesWhereUniqueInput | undefined;
}
