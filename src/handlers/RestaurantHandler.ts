import Photon, { RestaurantUpdateInput } from "@generated/photon";
import { Context } from "../types/context";
import { Restaurant, CreateRestaurantInput, UpdateRestaurantInput } from "../types/types";

export class RestaurantHandler {

    private photon: Photon

    constructor(ctx: Context) {
        this.photon = ctx.photon
    }

    public async getRestaurants(): Promise<Restaurant[]> {
        return await this.photon.restaurants.findMany()
    }

    public async getRestaurantById(id: string): Promise<Restaurant> {
        return await this.photon.restaurants.findOne({
            where: { id }
        })
    }

    public async createRestaurantInput(input: CreateRestaurantInput): Promise<Restaurant> {
        return await this.photon.restaurants.create({
            data: input,
        })
    }

    public async updateRestaurantInput(input: UpdateRestaurantInput): Promise<Restaurant> {
        const {id, ...data} = input
        return await this.photon.restaurants.update({
            where: {
                id: input.id
            },
            data: <RestaurantUpdateInput>data
        })
    }

    public async deleteRestaurant(id: string): Promise<Restaurant> {
        return await this.photon.restaurants.delete({
            where: { id }
        })
    }

    
}