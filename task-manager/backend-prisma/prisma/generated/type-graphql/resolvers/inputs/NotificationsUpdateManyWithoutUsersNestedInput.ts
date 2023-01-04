import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateManyUsersInputEnvelope } from "../inputs/NotificationsCreateManyUsersInputEnvelope";
import { NotificationsCreateOrConnectWithoutUsersInput } from "../inputs/NotificationsCreateOrConnectWithoutUsersInput";
import { NotificationsCreateWithoutUsersInput } from "../inputs/NotificationsCreateWithoutUsersInput";
import { NotificationsScalarWhereInput } from "../inputs/NotificationsScalarWhereInput";
import { NotificationsUpdateManyWithWhereWithoutUsersInput } from "../inputs/NotificationsUpdateManyWithWhereWithoutUsersInput";
import { NotificationsUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/NotificationsUpdateWithWhereUniqueWithoutUsersInput";
import { NotificationsUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/NotificationsUpsertWithWhereUniqueWithoutUsersInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class NotificationsUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [NotificationsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: NotificationsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: NotificationsUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  set?: NotificationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NotificationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  delete?: NotificationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: NotificationsUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: NotificationsUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationsScalarWhereInput[] | undefined;
}
