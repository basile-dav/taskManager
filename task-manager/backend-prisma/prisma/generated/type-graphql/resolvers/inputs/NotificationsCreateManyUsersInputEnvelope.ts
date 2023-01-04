import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateManyUsersInput } from "../inputs/NotificationsCreateManyUsersInput";

@TypeGraphQL.InputType("NotificationsCreateManyUsersInputEnvelope", {
  isAbstract: true
})
export class NotificationsCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationsCreateManyUsersInput], {
    nullable: false
  })
  data!: NotificationsCreateManyUsersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
