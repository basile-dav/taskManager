import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Assignees } from "../models/Assignees";
import { Comments } from "../models/Comments";
import { Notifications } from "../models/Notifications";
import { Tasks } from "../models/Tasks";
import { UsersCount } from "../resolvers/outputs/UsersCount";

@TypeGraphQL.ObjectType("Users", {
  isAbstract: true,
  simpleResolvers: true
})
export class Users {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  password?: string;

  password_digest?: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  preferences!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_sign_in_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  assignees?: Assignees | null;

  tasks?: Tasks[];

  notifications?: Notifications[];

  comments?: Comments[];

  @TypeGraphQL.Field(_type => UsersCount, {
    nullable: true
  })
  _count?: UsersCount | null;
}
