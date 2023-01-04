import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionGroup } from "../../enums/ActionGroup";
import { ActionName } from "../../enums/ActionName";
import { ActionTargetType } from "../../enums/ActionTargetType";

@TypeGraphQL.InputType("ActionsCreateManyInput", {
  isAbstract: true
})
export class ActionsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ActionGroup, {
    nullable: false
  })
  group!: "EDIT" | "DELETE" | "CREATE";

  @TypeGraphQL.Field(_type => ActionName, {
    nullable: false
  })
  name!: "TASK_CREATE" | "TASK_ASSIGN" | "TASK_STATE_PENDING" | "TASK_STATE_INPROGRESS" | "TASK_STATE_DONE" | "COMMENT_CREATE" | "COMMENT_REPLY";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  target_id?: string | undefined;

  @TypeGraphQL.Field(_type => ActionTargetType, {
    nullable: false
  })
  target_type!: "TASK" | "COMMENT";
}
