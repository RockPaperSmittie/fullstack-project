import Photon from "@generated/photon";
import { Review, UpdateReviewInput, CreateReviewInput } from "../types/types"
import { Context } from "../types/context";

export class ReviewHandler {

    private photon: Photon

    constructor(ctx: Context) {
        this.photon = ctx.photon
    }

    public async createReview(input: CreateReviewInput): Promise<Review> {

        return await this.photon.reviews.create({
            data: {
                rating: input.rating,
                description: input.description,
                author: {
                    connect: {
                        id: input.author
                    }
                },
                restaurant: {
                    connect: {
                        id: input.restaurant
                    }
                }
            },
            include: {
                author: true,
                restaurant: true,
            }
        })
    }

    public async getReviews(): Promise<Review[]> {
        return await this.photon.reviews.findMany({
            include: {
                author: true,
                restaurant: true
            }
        })
    }

    public async getReviewById(id: string): Promise<Review> {
        return await this.photon.reviews.findOne({
            where: { id },
            include: {
                author: true,
                restaurant: true
            }
        })
    }

    public async updateReview(input: UpdateReviewInput): Promise<Review> {
        return await this.photon.reviews.update({
            where: {
                id: input.id
            },
            data: {
                rating: input.rating,
                description: input.description
            },
            include: {
                author: true,
                restaurant: true
            }
        })
    }

    public async deleteReview(id: string): Promise<Review> {
        return await this.photon.reviews.delete({
            where: { id },
            include: {
                author: true,
                restaurant: true
            }
        })
    }

    public async getReviewsForUser(id: string): Promise<Review[]> {
        return await this.photon.reviews.findMany({
            where: {
                author: {
                    id
                }
            },
            include: {
                author: true,
                restaurant: true
            }
        })
    }

    public async getReviewsForRestaurant(id: string): Promise<Review[]> {
        return await this.photon.reviews.findMany({
            where: {
                restaurant: {
                    id
                }
            },
            include: {
                author: true,
                restaurant: true
            }
        })
    }
}