import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutCommentsInput } from "../inputs/UsersCreateWithoutCommentsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutCommentsInput;
}
