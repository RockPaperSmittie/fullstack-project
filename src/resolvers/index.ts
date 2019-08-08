import { IResolvers } from "../types/types"
import { Mutation } from "./Mutation"
import { Query } from "./Query"
import { Restaurant } from "./Restaurant"
import { Review } from "./Review"
import { User } from "./User"


export const resolvers: IResolvers = {
    Mutation,
    Query,
    Restaurant,
    Review,
    User
}
