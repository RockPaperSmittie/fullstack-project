import Photon, { Review } from "@generated/photon";

const photon = new Photon()

export class ReviewHandler {
    constructor() {}

    getReviewById(id: string): Promise<Review> {
        return photon.reviews.findOne({
            where: {
                id,
            }
        })
    }
    
}