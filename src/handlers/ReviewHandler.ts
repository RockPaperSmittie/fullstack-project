import Photon, { ReviewUpdateInput, Review } from "@generated/photon";
import { CreateReviewInput, UpdateReviewInput } from "../types/types"
import { Context } from "../types/context";

const photon = new Photon()

export class ReviewHandler {
    
    private photon: Photon

    constructor(ctx: Context) {
        this.photon = ctx.photon
    }

    public async createReview(input: CreateReviewInput): Promise<Review> {
        return await this.photon.reviews.create({
            data: input,
        })
    }

    public async getReviews(): Promise<Review[]> {
        return await this.photon.reviews.findMany()
    }

    public async getReviewById(id: string): Promise<Review> {
        return await this.photon.reviews.findOne({
            where: { id }
        })
    }

    public async updateReview(input: UpdateReviewInput): Promise<Review> {
        const {id, ...data} = input
        return await this.photon.reviews.update({
            where: {
                id: input.id
            },
            data: <ReviewUpdateInput>data
        })
    }
    
    public async deleteReview(id: string): Promise<Review> {
        return await this.photon.reviews.delete({
            where: { id }
        })
    }




    // getReviewById(id: string): Promise<Review> {
    //     return photon.reviews.findOne({
    //         where: {
    //             id,
    //         }
    //     })
    // }
    
}