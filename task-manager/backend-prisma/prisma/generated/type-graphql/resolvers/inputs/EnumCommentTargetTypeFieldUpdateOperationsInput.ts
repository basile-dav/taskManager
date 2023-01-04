import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentTargetType } from "../../enums/CommentTargetType";

@TypeGraphQL.InputType("EnumCommentTargetTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumCommentTargetTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => CommentTargetType, {
    nullable: true
  })
  set?: "COMMENT_NEW" | "COMMENT_REPLY" | undefined;
}
