import { MutationResolvers} from '../types/types'
import { UserHandler } from '../handlers/UserHandler'
import { RestaurantHandler } from '../handlers/RestaurantHandler'
import { ReviewHandler } from '../handlers/ReviewHandler'

export const Mutation: MutationResolvers = {

    // User mutations
    createUser: (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return handler.createUser(args.input)
    },
    updateUser: (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return handler.updateUser(args.input)
    },
    deleteUser: (root, args, ctx) => {
        const handler = new UserHandler(ctx)
        return handler.deleteUser(args.id)
    },

    // Restaurant mutations
    createRestaurant: (root, args, ctx) => {
        const handler = new RestaurantHandler(ctx)
        return handler.createRestaurant(args.input)
    },
    
    updateRestaurant: (root, args, ctx) => {
        const handler = new RestaurantHandler(ctx)
        return handler.updateRestaurantInput(args.input)
    },

    deleteRestaurant: (root, args, ctx) => {
        const handler = new RestaurantHandler(ctx)
        return handler.deleteRestaurant(args.id)
    },

    // Review mutations
    createReview: (root, args, ctx) => {
        const handler = new ReviewHandler(ctx)
        return handler.createReview(args.input)
    },

    updateReview: (root, args, ctx) => {
        const handler = new ReviewHandler(ctx)
        return handler.updateReview(args.input)
    },

    deleteReview: (root, args, ctx) => {
        const handler = new ReviewHandler(ctx)
        return handler.deleteReview(args.id)
    },
}