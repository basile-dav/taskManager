import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Actions } from "../models/Actions";
import { Users } from "../models/Users";

@TypeGraphQL.ObjectType("Notifications", {
  isAbstract: true,
  simpleResolvers: true
})
export class Notifications {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  users?: Users;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  actions?: Actions;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  action_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;
}
