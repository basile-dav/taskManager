import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumActionNameFilter } from "../inputs/NestedEnumActionNameFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ActionName } from "../../enums/ActionName";

@TypeGraphQL.InputType("NestedEnumActionNameWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumActionNameWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ActionName, {
    nullable: true
  })
  equals?: "TASK_CREATE" | "TASK_ASSIGN" | "TASK_STATE_PENDING" | "TASK_STATE_INPROGRESS" | "TASK_STATE_DONE" | "COMMENT_CREATE" | "COMMENT_REPLY" | undefined;

  @TypeGraphQL.Field(_type => [ActionName], {
    nullable: true
  })
  in?: Array<"TASK_CREATE" | "TASK_ASSIGN" | "TASK_STATE_PENDING" | "TASK_STATE_INPROGRESS" | "TASK_STATE_DONE" | "COMMENT_CREATE" | "COMMENT_REPLY"> | undefined;

  @TypeGraphQL.Field(_type => [ActionName], {
    nullable: true
  })
  notIn?: Array<"TASK_CREATE" | "TASK_ASSIGN" | "TASK_STATE_PENDING" | "TASK_STATE_INPROGRESS" | "TASK_STATE_DONE" | "COMMENT_CREATE" | "COMMENT_REPLY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionNameWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumActionNameWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionNameFilter, {
    nullable: true
  })
  _min?: NestedEnumActionNameFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionNameFilter, {
    nullable: true
  })
  _max?: NestedEnumActionNameFilter | undefined;
}
