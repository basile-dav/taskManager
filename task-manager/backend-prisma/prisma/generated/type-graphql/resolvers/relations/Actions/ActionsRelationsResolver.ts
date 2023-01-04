import * as TypeGraphQL from "type-graphql";
import { Actions } from "../../../models/Actions";
import { Notifications } from "../../../models/Notifications";
import { ActionsNotificationsArgs } from "./args/ActionsNotificationsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Actions)
export class ActionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Notifications], {
    nullable: false
  })
  async notifications(@TypeGraphQL.Root() actions: Actions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ActionsNotificationsArgs): Promise<Notifications[]> {
    return getPrismaFromContext(ctx).actions.findUnique({
      where: {
        id: actions.id,
      },
    }).notifications(args);
  }
}
