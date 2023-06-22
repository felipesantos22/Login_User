import { Request, Response } from "express";
import { UserService } from "../services/user";
import { hashSync } from "bcrypt";
import mongoose from "mongoose";


export class UserController {

    constructor(private readonly userService: UserService) { }

    async create(req: Request, res: Response) {
        const { email, password } = req.body;
        const hashPassword = hashSync(password, 8);
        const create = await this.userService.createUser({ email, password: hashPassword });
        return res.json(create);
    }

    async read(req: Request, res: Response) {
        const read = await this.userService.readService();
        return res.json(read);
    }

    async getById(req: Request, res: Response) {
        const { _id } = req.params;
        const id = new mongoose.Types.ObjectId(_id);
        const byId = await this.userService.findById(id);
        return res.json(byId);
    }

    async update(req: Request, res: Response) {
        const { _id } = req.params;
        const id = new mongoose.Types.ObjectId(_id);
        const { email, password } = req.body;
        const update = await this.userService.updateService(id, { email, password });
        return res.json({ message: "Update created.", update });
    }

    async deleteController (req: Request, res: Response) {
        const { _id } = req.params;
        const id = new mongoose.Types.ObjectId(_id);
        await this.userService.deleteService(id);
        return res.json({message:"Deleted."})
    }
}