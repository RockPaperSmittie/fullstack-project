import Photon from "@generated/photon";
import { Context } from "../types/context";
import { Restaurant, CreateRestaurantInput, UpdateRestaurantInput, User } from "../types/types";

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

    public async createRestaurant(input: CreateRestaurantInput): Promise<Restaurant> {
        return await this.photon.restaurants.create({
            data: {
                name: input.name,
                location: input.location,
                pictureURL: input.pictureURL,
                author: {
                    connect: {
                        id: input.user
                    }
                }
            }
        })
    }

    public async updateRestaurantInput(input: UpdateRestaurantInput): Promise<Restaurant> {
        const { id, ...data } = input
        return await this.photon.restaurants.update({
            where: {
                id
            },
            data
        })
    }

    public async deleteRestaurant(id: string): Promise<Restaurant> {
        await this.photon.reviews.deleteMany({
            where: {
                restaurant: {
                    id
                }
            },
        })

        return await this.photon.restaurants.delete({
            where: { id }
        })
    }

    public async getUserForRestaurant(id: string): Promise<User> {
        return await this.photon.restaurants.findOne({
            where: {
                id: id
            }
        }).author()
    }


}