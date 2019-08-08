import { QueryResolvers, User, Review, Restaurant } from "../types/types";
import { ReviewHandler } from "../handlers/ReviewHandler"
import { UserHandler } from "../handlers/UserHandler"

export const Query: QueryResolvers = {
    users: async (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return await handler.getUsers()
    },
    user: async (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return await handler.getUserById(args.id)
    },
    reviews: (root, args, ctx) => {
        const result: Review[] = []
        return result
    },
    review: (root, args, ctx) => {
        const handler = new ReviewHandler()
        handler.getReviewById(args.id)
        return {
            id: "1",
            createdAt: "",
            rating: 4,
            description: "A description...",
            author: {
                id: "",
                createdAt: "",
                email: "ruan@test.com",
                username: "MadLad",
                firstName: "Ruan",
                lastName: "Smit",
                profilePictureURL: "",
            },
            restaurant: {
                id: "",
                name: "",
                location: "",
                picture: ""
            },
        }
    },
    restaurants: (root, args, ctx) => {
        const result: Restaurant[] = []
        return result
    }
}
