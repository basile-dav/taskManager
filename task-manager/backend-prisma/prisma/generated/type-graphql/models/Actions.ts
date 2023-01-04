import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Notifications } from "../models/Notifications";
import { ActionGroup } from "../enums/ActionGroup";
import { ActionName } from "../enums/ActionName";
import { ActionTargetType } from "../enums/ActionTargetType";
import { ActionsCount } from "../resolvers/outputs/ActionsCount";

@TypeGraphQL.ObjectType("Actions", {
  isAbstract: true,
  simpleResolvers: true
})
export class Actions {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => ActionGroup, {
    nullable: false
  })
  group!: "EDIT" | "DELETE" | "CREATE";

  @TypeGraphQL.Field(_type => ActionName, {
    nullable: false
  })
  name!: "TASK_CREATE" | "TASK_ASSIGN" | "TASK_STATE_PENDING" | "TASK_STATE_INPROGRESS" | "TASK_STATE_DONE" | "COMMENT_CREATE" | "COMMENT_REPLY";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  target_id!: string;

  @TypeGraphQL.Field(_type => ActionTargetType, {
    nullable: false
  })
  target_type!: "TASK" | "COMMENT";

  notifications?: Notifications[];

  @TypeGraphQL.Field(_type => ActionsCount, {
    nullable: true
  })
  _count?: ActionsCount | null;
}
