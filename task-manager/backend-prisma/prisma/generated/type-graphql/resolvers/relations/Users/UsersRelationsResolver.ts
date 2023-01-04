import * as TypeGraphQL from "type-graphql";
import { Assignees } from "../../../models/Assignees";
import { Comments } from "../../../models/Comments";
import { Notifications } from "../../../models/Notifications";
import { Tasks } from "../../../models/Tasks";
import { Users } from "../../../models/Users";
import { UsersCommentsArgs } from "./args/UsersCommentsArgs";
import { UsersNotificationsArgs } from "./args/UsersNotificationsArgs";
import { UsersTasksArgs } from "./args/UsersTasksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class UsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Assignees, {
    nullable: true
  })
  async assignees(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any): Promise<Assignees | null> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).assignees({});
  }

  @TypeGraphQL.FieldResolver(_type => [Tasks], {
    nullable: false
  })
  async tasks(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersTasksArgs): Promise<Tasks[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).tasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Notifications], {
    nullable: false
  })
  async notifications(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersNotificationsArgs): Promise<Notifications[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).notifications(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comments], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersCommentsArgs): Promise<Comments[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).comments(args);
  }
}
