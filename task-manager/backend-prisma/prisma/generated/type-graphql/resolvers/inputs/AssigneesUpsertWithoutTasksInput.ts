import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateWithoutTasksInput } from "../inputs/AssigneesCreateWithoutTasksInput";
import { AssigneesUpdateWithoutTasksInput } from "../inputs/AssigneesUpdateWithoutTasksInput";

@TypeGraphQL.InputType("AssigneesUpsertWithoutTasksInput", {
  isAbstract: true
})
export class AssigneesUpsertWithoutTasksInput {
  @TypeGraphQL.Field(_type => AssigneesUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: AssigneesUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => AssigneesCreateWithoutTasksInput, {
    nullable: false
  })
  create!: AssigneesCreateWithoutTasksInput;
}
