import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutCommentsInput } from "../inputs/UsersCreateWithoutCommentsInput";
import { UsersUpdateWithoutCommentsInput } from "../inputs/UsersUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("UsersUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class UsersUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutCommentsInput;
}
