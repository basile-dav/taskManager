import * as TypeGraphQL from "type-graphql";
import { Actions } from "../../../models/Actions";
import { Notifications } from "../../../models/Notifications";
import { Users } from "../../../models/Users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notifications)
export class NotificationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: false
  })
  async users(@TypeGraphQL.Root() notifications: Notifications, @TypeGraphQL.Ctx() ctx: any): Promise<Users> {
    return getPrismaFromContext(ctx).notifications.findUnique({
      where: {
        id: notifications.id,
      },
    }).users({});
  }

  @TypeGraphQL.FieldResolver(_type => Actions, {
    nullable: false
  })
  async actions(@TypeGraphQL.Root() notifications: Notifications, @TypeGraphQL.Ctx() ctx: any): Promise<Actions> {
    return getPrismaFromContext(ctx).notifications.findUnique({
      where: {
        id: notifications.id,
      },
    }).actions({});
  }
}
