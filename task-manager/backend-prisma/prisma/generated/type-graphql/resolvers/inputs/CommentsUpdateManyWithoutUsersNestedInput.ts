import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyUsersInputEnvelope } from "../inputs/CommentsCreateManyUsersInputEnvelope";
import { CommentsCreateOrConnectWithoutUsersInput } from "../inputs/CommentsCreateOrConnectWithoutUsersInput";
import { CommentsCreateWithoutUsersInput } from "../inputs/CommentsCreateWithoutUsersInput";
import { CommentsScalarWhereInput } from "../inputs/CommentsScalarWhereInput";
import { CommentsUpdateManyWithWhereWithoutUsersInput } from "../inputs/CommentsUpdateManyWithWhereWithoutUsersInput";
import { CommentsUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/CommentsUpdateWithWhereUniqueWithoutUsersInput";
import { CommentsUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/CommentsUpsertWithWhereUniqueWithoutUsersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class CommentsUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  set?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: CommentsUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentsScalarWhereInput[] | undefined;
}
