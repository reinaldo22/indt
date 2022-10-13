import { Request, Response } from 'express';
import { User } from 'src/models/User';
import bcrypt from 'bcryptjs';

class CreateUserController{
    public async createUserController(req: Request, res: Response) {
        const { name, email, password, last_name } = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (user) {
            return res.status(404).json({ message: "Usuario ja existe" })
        }
        const salt = await bcrypt.genSalt(1);
        const passwordHashed = await bcrypt.hash(password, salt);

        const usercreate = User.create({
            name,
            email,
            last_name,
            password: passwordHashed,
            role: "cliente"
        })
        console.log(">>>>>>>>>>>>>", usercreate)
        await User.save(usercreate);
        return res.status(200).json(user)
    }
}

export default new CreateUserController();