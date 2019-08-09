import Photon, { UserUpdateInput } from "@generated/photon";
import { User, CreateUserInput, UpdateUserInput } from "../types/types"
import { Context } from "../types/context";

export class UserHandler {

    private photon: Photon

    constructor(ctx: Context) {
        this.photon = ctx.photon
    }

    public async createUser(input: CreateUserInput): Promise<User> {
        return await this.photon.users.create({
            data: input,
        })
    }

    public async getUsers(): Promise<User[]> {
        return await this.photon.users.findMany()
    }

    public async getUserById(id: string): Promise<User> {
        return await this.photon.users.findOne({
            where: { id }
        })
    }

    public async updateUser(input: UpdateUserInput): Promise<User> {
        const {id, ...data} = input
        return await this.photon.users.update({
            where: {
                id: input.id
            },
            data: <UserUpdateInput>data
        })
    }

    public async deleteUser(id: string): Promise<User> {
        return await this.photon.users.delete({
            where: { id }
        })
    }
}