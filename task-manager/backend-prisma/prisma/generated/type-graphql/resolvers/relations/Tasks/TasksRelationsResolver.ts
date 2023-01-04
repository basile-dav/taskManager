import * as TypeGraphQL from "type-graphql";
import { Assignees } from "../../../models/Assignees";
import { Comments } from "../../../models/Comments";
import { Tasks } from "../../../models/Tasks";
import { Users } from "../../../models/Users";
import { TasksCommentsArgs } from "./args/TasksCommentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tasks)
export class TasksRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: false
  })
  async users(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any): Promise<Users> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).users({});
  }

  @TypeGraphQL.FieldResolver(_type => Assignees, {
    nullable: true
  })
  async assignees(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any): Promise<Assignees | null> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).assignees({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comments], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TasksCommentsArgs): Promise<Comments[]> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).comments(args);
  }
}
