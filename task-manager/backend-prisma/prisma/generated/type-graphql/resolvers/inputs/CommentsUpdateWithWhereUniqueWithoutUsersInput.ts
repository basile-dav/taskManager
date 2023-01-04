import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsUpdateWithoutUsersInput } from "../inputs/CommentsUpdateWithoutUsersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class CommentsUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: CommentsUpdateWithoutUsersInput;
}
