import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyUsersInputEnvelope } from "../inputs/CommentsCreateManyUsersInputEnvelope";
import { CommentsCreateOrConnectWithoutUsersInput } from "../inputs/CommentsCreateOrConnectWithoutUsersInput";
import { CommentsCreateWithoutUsersInput } from "../inputs/CommentsCreateWithoutUsersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class CommentsCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput[] | undefined;
}
