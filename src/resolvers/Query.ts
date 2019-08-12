import { QueryResolvers } from "../types/types";
import { ReviewHandler } from "../handlers/ReviewHandler"
import { UserHandler } from "../handlers/UserHandler"
import { RestaurantHandler } from "../handlers/RestaurantHandler";

export const Query: QueryResolvers = {
    users: async (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return await handler.getUsers()
    },
    user: async (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return await handler.getUserById(args.id)
    },
    reviews: async (root, args, ctx) => {
        const handler = new ReviewHandler(ctx)
        return await handler.getReviews()
    },
    
    review: async (root, args, ctx) => {
        const handler = new ReviewHandler(ctx)
        return await handler.getReviewById(args.id)
    },
    
    restaurants: async (root, args, ctx) => {
            const handler = new RestaurantHandler(ctx)
            return await handler.getRestaurants()
    },

    restaurant: async (root, args, ctx) => {
        const handler = new RestaurantHandler(ctx)
        return await handler.getRestaurantById(args.id)
    }
}
