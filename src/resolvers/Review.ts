import { ReviewResolvers } from "../types/types";

export const Review: ReviewResolvers = {
    // id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
    // createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
    // rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
    // description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
    // author?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
    // restaurant?: Resolver<ResolversTypes["Restaurant"], ParentType, ContextType>;

    id: (root, args, ctx) => {
        return ""
    },
    createdAt: (root, args, ctx) => {
        return ""
    },
    rating: (root, args, ctx) => {
        return 2
    },
    description: (root, args, ctx) => {
        return ""
    },
    author: (root, args, ctx) => {
        return {
            id: "",
            createdAt: "",
            email: "ruan@test.com",
            username: "MadLad",
            firstName: "Ruan",
            lastName: "Smit",
            profilePictureURL: "",
        }
    },
    // restaurant (root, args, ctx) => {}
}