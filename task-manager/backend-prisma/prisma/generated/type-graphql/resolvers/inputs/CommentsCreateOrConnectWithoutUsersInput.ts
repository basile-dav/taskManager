import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutUsersInput } from "../inputs/CommentsCreateWithoutUsersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class CommentsCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutUsersInput;
}
