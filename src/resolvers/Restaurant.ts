import { RestaurantResolvers } from "../types/types";
import { ReviewHandler } from "../handlers/ReviewHandler";
import { UserHandler } from "../handlers/UserHandler";
import { RestaurantHandler } from "../handlers/RestaurantHandler";

export const Restaurant: RestaurantResolvers = {
    reviews: async (root, args, ctx) => {
        const handler = new ReviewHandler(ctx)
        return handler.getReviewsForRestaurant(root.id)
    },
    author: async (root, args, ctx) => {
        const handler = new RestaurantHandler(ctx)
        return handler.getUserForRestaurant(root.id)
    }
}