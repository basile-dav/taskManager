import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTaskStateFilter } from "../inputs/NestedEnumTaskStateFilter";
import { NestedEnumTaskStateWithAggregatesFilter } from "../inputs/NestedEnumTaskStateWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TaskState } from "../../enums/TaskState";

@TypeGraphQL.InputType("EnumTaskStateWithAggregatesFilter", {
  isAbstract: true
})
export class EnumTaskStateWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTaskStateWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTaskStateWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTaskStateFilter, {
    nullable: true
  })
  _min?: NestedEnumTaskStateFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTaskStateFilter, {
    nullable: true
  })
  _max?: NestedEnumTaskStateFilter | undefined;
}
