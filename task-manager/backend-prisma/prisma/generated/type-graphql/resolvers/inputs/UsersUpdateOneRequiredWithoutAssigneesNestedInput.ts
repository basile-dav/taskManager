import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutAssigneesInput } from "../inputs/UsersCreateOrConnectWithoutAssigneesInput";
import { UsersCreateWithoutAssigneesInput } from "../inputs/UsersCreateWithoutAssigneesInput";
import { UsersUpdateWithoutAssigneesInput } from "../inputs/UsersUpdateWithoutAssigneesInput";
import { UsersUpsertWithoutAssigneesInput } from "../inputs/UsersUpsertWithoutAssigneesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutAssigneesNestedInput", {
  isAbstract: true
})
export class UsersUpdateOneRequiredWithoutAssigneesNestedInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutAssigneesInput, {
    nullable: true
  })
  create?: UsersCreateWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutAssigneesInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutAssigneesInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutAssigneesInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutAssigneesInput | undefined;
}
