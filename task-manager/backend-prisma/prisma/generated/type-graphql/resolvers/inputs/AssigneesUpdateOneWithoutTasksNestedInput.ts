import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateOrConnectWithoutTasksInput } from "../inputs/AssigneesCreateOrConnectWithoutTasksInput";
import { AssigneesCreateWithoutTasksInput } from "../inputs/AssigneesCreateWithoutTasksInput";
import { AssigneesUpdateWithoutTasksInput } from "../inputs/AssigneesUpdateWithoutTasksInput";
import { AssigneesUpsertWithoutTasksInput } from "../inputs/AssigneesUpsertWithoutTasksInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesUpdateOneWithoutTasksNestedInput", {
  isAbstract: true
})
export class AssigneesUpdateOneWithoutTasksNestedInput {
  @TypeGraphQL.Field(_type => AssigneesCreateWithoutTasksInput, {
    nullable: true
  })
  create?: AssigneesCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: AssigneesCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesUpsertWithoutTasksInput, {
    nullable: true
  })
  upsert?: AssigneesUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: true
  })
  connect?: AssigneesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesUpdateWithoutTasksInput, {
    nullable: true
  })
  update?: AssigneesUpdateWithoutTasksInput | undefined;
}
