import Photon from "@generated/photon";
import { Context } from "../types/context";
import { Restaurant, CreateRestaurantInput } from "../types/types";

export class RestaurantHandler {

    private photon: Photon

    constructor(ctx: Context) {
        this.photon = ctx.photon
    }

    public async createRestaurantInput(input: CreateRestaurantInput): Promise<Restaurant> {
        return await this.photon.restaurants.create({
            data: input,
        })
    }

    
}