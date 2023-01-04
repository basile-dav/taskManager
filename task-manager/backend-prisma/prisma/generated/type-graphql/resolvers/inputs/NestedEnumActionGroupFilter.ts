import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionGroup } from "../../enums/ActionGroup";

@TypeGraphQL.InputType("NestedEnumActionGroupFilter", {
  isAbstract: true
})
export class NestedEnumActionGroupFilter {
  @TypeGraphQL.Field(_type => ActionGroup, {
    nullable: true
  })
  equals?: "EDIT" | "DELETE" | "CREATE" | undefined;

  @TypeGraphQL.Field(_type => [ActionGroup], {
    nullable: true
  })
  in?: Array<"EDIT" | "DELETE" | "CREATE"> | undefined;

  @TypeGraphQL.Field(_type => [ActionGroup], {
    nullable: true
  })
  notIn?: Array<"EDIT" | "DELETE" | "CREATE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumActionGroupFilter, {
    nullable: true
  })
  not?: NestedEnumActionGroupFilter | undefined;
}
