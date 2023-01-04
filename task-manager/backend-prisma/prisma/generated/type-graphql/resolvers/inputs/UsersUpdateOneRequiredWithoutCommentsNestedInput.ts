import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutCommentsInput } from "../inputs/UsersCreateOrConnectWithoutCommentsInput";
import { UsersCreateWithoutCommentsInput } from "../inputs/UsersCreateWithoutCommentsInput";
import { UsersUpdateWithoutCommentsInput } from "../inputs/UsersUpdateWithoutCommentsInput";
import { UsersUpsertWithoutCommentsInput } from "../inputs/UsersUpsertWithoutCommentsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutCommentsNestedInput", {
  isAbstract: true
})
export class UsersUpdateOneRequiredWithoutCommentsNestedInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutCommentsInput | undefined;
}
