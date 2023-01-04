import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionGroup } from "../../enums/ActionGroup";
import { ActionName } from "../../enums/ActionName";
import { ActionTargetType } from "../../enums/ActionTargetType";

@TypeGraphQL.ObjectType("ActionsMaxAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class ActionsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => ActionGroup, {
    nullable: true
  })
  group!: "EDIT" | "DELETE" | "CREATE" | null;

  @TypeGraphQL.Field(_type => ActionName, {
    nullable: true
  })
  name!: "TASK_CREATE" | "TASK_ASSIGN" | "TASK_STATE_PENDING" | "TASK_STATE_INPROGRESS" | "TASK_STATE_DONE" | "COMMENT_CREATE" | "COMMENT_REPLY" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  target_id!: string | null;

  @TypeGraphQL.Field(_type => ActionTargetType, {
    nullable: true
  })
  target_type!: "TASK" | "COMMENT" | null;
}
