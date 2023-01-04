import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateManyUsersInputEnvelope } from "../inputs/NotificationsCreateManyUsersInputEnvelope";
import { NotificationsCreateOrConnectWithoutUsersInput } from "../inputs/NotificationsCreateOrConnectWithoutUsersInput";
import { NotificationsCreateWithoutUsersInput } from "../inputs/NotificationsCreateWithoutUsersInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class NotificationsCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [NotificationsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: NotificationsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationsWhereUniqueInput[] | undefined;
}
