import * as TypeGraphQL from "type-graphql";

export enum UsersScalarFieldEnum {
  id = "id",
  email = "email",
  password = "password",
  password_digest = "password_digest",
  active = "active",
  preferences = "preferences",
  last_sign_in_at = "last_sign_in_at",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});
