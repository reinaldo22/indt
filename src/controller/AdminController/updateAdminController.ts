import { Request, Response } from 'express';
import { User } from 'src/models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class UpdateAdminController {



    public async updateAdminController(req: Request, res: Response) {

        const { name, email, password, last_name } = req.body;
        const user = await User.findOne({ where: { id: parseInt(req.params.id) } });

        if (!user) {
            return res.status(404).json({ message: "Usuario inexistente" })
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHashed = await bcrypt.hash(password, salt);


        await User.update(user.id, { name: name, email: email, password: passwordHashed, last_name: last_name });
        return res.status(200).json(user)
    }

}

export default new UpdateAdminController();