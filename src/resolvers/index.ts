import { Resolvers } from "../types/types"
import { Mutation } from "./Mutation"
import { Query } from "./Query"
import { Restaurant } from "./Restaurant"
import { Review } from "./Review"
import { User } from "./User"
import { Context } from "../types/context";


export const resolvers: Resolvers<Context> = {
    Mutation,
    Query,
    Restaurant,
    Review,
    User
}
