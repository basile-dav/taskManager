import * as TypeGraphQL from "type-graphql";
import { Assignees } from "../../../models/Assignees";
import { Tasks } from "../../../models/Tasks";
import { Users } from "../../../models/Users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assignees)
export class AssigneesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tasks, {
    nullable: false
  })
  async tasks(@TypeGraphQL.Root() assignees: Assignees, @TypeGraphQL.Ctx() ctx: any): Promise<Tasks> {
    return getPrismaFromContext(ctx).assignees.findUnique({
      where: {
        id: assignees.id,
      },
    }).tasks({});
  }

  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: false
  })
  async users(@TypeGraphQL.Root() assignees: Assignees, @TypeGraphQL.Ctx() ctx: any): Promise<Users> {
    return getPrismaFromContext(ctx).assignees.findUnique({
      where: {
        id: assignees.id,
      },
    }).users({});
  }
}
