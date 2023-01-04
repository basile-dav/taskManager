import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutUsersInput } from "../inputs/CommentsCreateWithoutUsersInput";
import { CommentsUpdateWithoutUsersInput } from "../inputs/CommentsUpdateWithoutUsersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class CommentsUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: CommentsUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutUsersInput;
}
