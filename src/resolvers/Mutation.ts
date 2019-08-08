import { MutationResolvers, User, Review, CreateUserInput, UpdateUserInput, CreateRestaurantInput } from '../types/types';
import { UserHandler } from '../handlers/UserHandler';
import { RestaurantHandler } from '../handlers/RestaurantHandler'

export const Mutation: MutationResolvers = {
    createUser: (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return handler.createUser(<CreateUserInput>args.input)
    },
    updateUser: (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return handler.updateUser(<UpdateUserInput>args.input)
    },
    deleteUser: (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return handler.deleteUser(args.id)
    },
    createRestaurant: (root, args, ctx) => {
        const handler = new RestaurantHandler(ctx)
        return handler.createRestaurantInput(args.input)
    },
    createReview: (root, args, ctx) => {
        const result: Review = {
            id: "",
            createdAt: "",
            rating: 1,
            description: "",
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
            }
        }
        return result
    }
}