import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TasksRelationFilter } from "../inputs/TasksRelationFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType("AssigneesWhereInput", {
  isAbstract: true
})
export class AssigneesWhereInput {
  @TypeGraphQL.Field(_type => [AssigneesWhereInput], {
    nullable: true
  })
  AND?: AssigneesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereInput], {
    nullable: true
  })
  OR?: AssigneesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereInput], {
    nullable: true
  })
  NOT?: AssigneesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TasksRelationFilter, {
    nullable: true
  })
  tasks?: TasksRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  task_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  users?: UsersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;
}
