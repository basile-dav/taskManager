import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTaskStateFilter } from "../inputs/NestedEnumTaskStateFilter";
import { TaskState } from "../../enums/TaskState";

@TypeGraphQL.InputType("EnumTaskStateFilter", {
  isAbstract: true
})
export class EnumTaskStateFilter {
  @TypeGraphQL.Field(_type => TaskState, {
    nullable: true
  })
  equals?: "PENDING" | "IN_PROGRESS" | "DONE" | undefined;

  @TypeGraphQL.Field(_type => [TaskState], {
    nullable: true
  })
  in?: Array<"PENDING" | "IN_PROGRESS" | "DONE"> | undefined;

  @TypeGraphQL.Field(_type => [TaskState], {
    nullable: true
  })
  notIn?: Array<"PENDING" | "IN_PROGRESS" | "DONE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTaskStateFilter, {
    nullable: true
  })
  not?: NestedEnumTaskStateFilter | undefined;
}
