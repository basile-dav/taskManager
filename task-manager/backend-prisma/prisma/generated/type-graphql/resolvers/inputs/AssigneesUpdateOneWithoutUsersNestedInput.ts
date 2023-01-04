import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateOrConnectWithoutUsersInput } from "../inputs/AssigneesCreateOrConnectWithoutUsersInput";
import { AssigneesCreateWithoutUsersInput } from "../inputs/AssigneesCreateWithoutUsersInput";
import { AssigneesUpdateWithoutUsersInput } from "../inputs/AssigneesUpdateWithoutUsersInput";
import { AssigneesUpsertWithoutUsersInput } from "../inputs/AssigneesUpsertWithoutUsersInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesUpdateOneWithoutUsersNestedInput", {
  isAbstract: true
})
export class AssigneesUpdateOneWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => AssigneesCreateWithoutUsersInput, {
    nullable: true
  })
  create?: AssigneesCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: AssigneesCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: AssigneesUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: true
  })
  connect?: AssigneesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: AssigneesUpdateWithoutUsersInput | undefined;
}
