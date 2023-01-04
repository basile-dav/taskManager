import * as TypeGraphQL from "type-graphql";
import { Comments } from "../../../models/Comments";
import { Tasks } from "../../../models/Tasks";
import { Users } from "../../../models/Users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comments)
export class CommentsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: false
  })
  async users(@TypeGraphQL.Root() comments: Comments, @TypeGraphQL.Ctx() ctx: any): Promise<Users> {
    return getPrismaFromContext(ctx).comments.findUnique({
      where: {
        id: comments.id,
      },
    }).users({});
  }

  @TypeGraphQL.FieldResolver(_type => Tasks, {
    nullable: false
  })
  async tasks(@TypeGraphQL.Root() comments: Comments, @TypeGraphQL.Ctx() ctx: any): Promise<Tasks> {
    return getPrismaFromContext(ctx).comments.findUnique({
      where: {
        id: comments.id,
      },
    }).tasks({});
  }
}
