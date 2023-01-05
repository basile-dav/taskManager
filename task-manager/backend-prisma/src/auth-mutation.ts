import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUsersArgs } from '@generated/resolvers/crud/Users/args/CreateOneUsersArgs';
import { FindUniqueUsersArgs } from '@generated/resolvers/crud/Users/args/FindUniqueUsersArgs';
import {Users} from "@generated/models/Users";
import { Ctx } from "type-graphql";
import { getPrismaFromContext } from "@generated/helpers";
import bcrypt from 'bcrypt';


@TypeGraphQL.Resolver()
export class AuthenticationResolver {           
    @TypeGraphQL.Mutation({
        nullable:false
    })
    async signup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Users) {
        const password = await bcrypt.hash(args.password,10)
        const user = await getPrismaFromContext(ctx).users.create({args,password})
        return {
            user
        }
    }

    @TypeGraphQL.Query({
        nullable:false
    })
    async login(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Users){
        const user = await getPrismaFromContext(ctx).users.findUnique({where:{email: args.email}})
        if (!user) {
            console.log("no such user found")
        }
        const valid = await bcrypt.compare(args.password, user.password)
        if (!valid) {
            console.log("Invalid Password")
        }     
        return {
            user
        
    }
    }
}