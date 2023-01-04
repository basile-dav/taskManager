import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesWhereInput } from "../inputs/AssigneesWhereInput";

@TypeGraphQL.InputType("AssigneesRelationFilter", {
  isAbstract: true
})
export class AssigneesRelationFilter {
  @TypeGraphQL.Field(_type => AssigneesWhereInput, {
    nullable: true
  })
  is?: AssigneesWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesWhereInput, {
    nullable: true
  })
  isNot?: AssigneesWhereInput | undefined;
}
