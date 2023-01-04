import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyUsersInput } from "../inputs/CommentsCreateManyUsersInput";

@TypeGraphQL.InputType("CommentsCreateManyUsersInputEnvelope", {
  isAbstract: true
})
export class CommentsCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentsCreateManyUsersInput], {
    nullable: false
  })
  data!: CommentsCreateManyUsersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
