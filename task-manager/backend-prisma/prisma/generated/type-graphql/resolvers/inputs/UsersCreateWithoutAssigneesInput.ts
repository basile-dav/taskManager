import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateNestedManyWithoutUsersInput } from "../inputs/CommentsCreateNestedManyWithoutUsersInput";
import { NotificationsCreateNestedManyWithoutUsersInput } from "../inputs/NotificationsCreateNestedManyWithoutUsersInput";
import { TasksCreateNestedManyWithoutUsersInput } from "../inputs/TasksCreateNestedManyWithoutUsersInput";

@TypeGraphQL.InputType("UsersCreateWithoutAssigneesInput", {
  isAbstract: true
})
export class UsersCreateWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  preferences?: Prisma.InputJsonValue | undefined;

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

  @TypeGraphQL.Field(_type => TasksCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  tasks?: TasksCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  notifications?: NotificationsCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  comments?: CommentsCreateNestedManyWithoutUsersInput | undefined;
}
