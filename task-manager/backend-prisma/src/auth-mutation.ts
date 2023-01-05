import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUsersArgs } from '@generated/resolvers/crud/Users/args/CreateOneUsersArgs';
import { FindUniqueUsersArgs } from '@generated/resolvers/crud/Users/args/FindUniqueUsersArgs';
import {Users} from "@generated/models/Users";
import { Ctx } from "type-graphql";
import { getPrismaFromContext } from "@generated/helpers";
import { Module } from "module";
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

@TypeGraphQL.Resolver()
export class AuthenticationResolver {
    @TypeGraphQL.Mutation({
        nullable:false
    })
    async signup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: any) {
        const password = await bcrypt.hash(args.password,10)
        const user = await getPrismaFromContext(ctx).users.create({...args,password})
        const token = jwt.sign({userId:user.id},APP_SECRET)
        return {
            token,
            user
        }
    }

    @TypeGraphQL.Query({
        nullable:false
    })
    async login(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: any){
        const user = await getPrismaFromContext(ctx).users.findUnique({where:{...args}})
        if (!user) {
            throw new Error("no such user"); 
        }
        const valid = await bcrypt.compare(args.password, user.password)
        if (!valid) {
            throw new Error("Invalid Password");
        }
        const token = jwt.sign({userId:user.id},APP_SECRET)
        
        return {
            token,
            user
        }
    }

}