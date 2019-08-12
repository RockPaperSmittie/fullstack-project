import { MutationResolvers, User, Review, CreateUserInput, UpdateUserInput, CreateRestaurantInput, UpdateRestaurantInput, Restaurant, CreateReviewInput, } from '../types/types';
import { UserHandler } from '../handlers/UserHandler';
import { RestaurantHandler } from '../handlers/RestaurantHandler'
import { ReviewHandler } from '../handlers/ReviewHandler';

export const Mutation: MutationResolvers = {

    //User mutations
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

    //Restaurant mutations
    createRestaurant: (root, args, ctx) => {
        const handler = new RestaurantHandler(ctx)
        return handler.createRestaurantInput(args.input)
    },
    
    updateRestaurant: (root, args, ctx) => {
        const handler = new RestaurantHandler(ctx)
        return handler.updateRestaurantInput(<UpdateRestaurantInput>args.input)
    },

    deleteRestaurant: (root, args, ctx) => {
        const handler = new RestaurantHandler(ctx)
        return handler.deleteRestaurant(args.id)
    },

    //Review mutations
    createReview: (root, args, ctx) => {
        const handler = new ReviewHandler(ctx)
        return handler.createReview(<CreateReviewInput>args.input)
    },

    updateReview: (root, args, ctx) => {
        const handler = new ReviewHandler(ctx)
        return handler.updateReview(args.input)
    },

    deleteReview: (root, args, ctx) => {
        const handler = new ReviewHandler(ctx)
        return handler.deleteReview(args.id)
    },
    // createReview: (root, args, ctx) => {
    //     const result: Review = {
    //         id: "",
    //         createdAt: "",
    //         rating: 1,
    //         description: "",
    //         author: {
    //             id: "",
    //             createdAt: "",
    //             email: "ruan@test.com",
    //             username: "MadLad",
    //             firstName: "Ruan",
    //             lastName: "Smit",
    //             profilePictureURL: "",
    //         },
    //         restaurant: {
    //             id: "",
    //             name: "",
    //             location: "",
    //             picture: ""
    //         }
    //     }
    //     return result
    // }
}