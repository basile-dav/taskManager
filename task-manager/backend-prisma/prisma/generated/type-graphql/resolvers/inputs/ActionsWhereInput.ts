import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumActionGroupFilter } from "../inputs/EnumActionGroupFilter";
import { EnumActionNameFilter } from "../inputs/EnumActionNameFilter";
import { EnumActionTargetTypeFilter } from "../inputs/EnumActionTargetTypeFilter";
import { NotificationsListRelationFilter } from "../inputs/NotificationsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActionsWhereInput", {
  isAbstract: true
})
export class ActionsWhereInput {
  @TypeGraphQL.Field(_type => [ActionsWhereInput], {
    nullable: true
  })
  AND?: ActionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsWhereInput], {
    nullable: true
  })
  OR?: ActionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsWhereInput], {
    nullable: true
  })
  NOT?: ActionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumActionGroupFilter, {
    nullable: true
  })
  group?: EnumActionGroupFilter | undefined;

  @TypeGraphQL.Field(_type => EnumActionNameFilter, {
    nullable: true
  })
  name?: EnumActionNameFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  target_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumActionTargetTypeFilter, {
    nullable: true
  })
  target_type?: EnumActionTargetTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationsListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationsListRelationFilter | undefined;
}
