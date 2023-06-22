import mongoose from "mongoose";
import userDTO from "../interfaces/user";
import login from "../model/user";

export class UserService {

    async createUser(user: userDTO) {
        const create = await login.create(user);
        return create;
    }

    async readService() {
        const read = await login.find();
        return read;
    }

    async findById(_id: mongoose.Types.ObjectId) {
        const byId = await login.findById(_id);
        return byId;
    }

    async updateService(_id: mongoose.Types.ObjectId, user: userDTO) {
        const update = await login.findByIdAndUpdate(_id, user);
        return update;
    }

    async deleteService(_id: mongoose.Types.ObjectId) {
        const deleteUser = await login.findByIdAndDelete(_id);
        return deleteUser;
    }
}