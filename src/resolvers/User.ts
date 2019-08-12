import { UserResolvers } from "../types/types";
import { ReviewHandler } from "../handlers/ReviewHandler";

export const User: UserResolvers = {
    reviews: async (root, args, ctx) => {
        const handler  = new ReviewHandler(ctx)
        return await handler.getReviewsForUser(root.id)
    }
}