import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { User } from 'src/models/User';


class LoginAdminController {
    public async loginController(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(404).json({ message: "Usuario Não cadastrado" })
        }


        const isValidatePassword = await bcrypt.compare(password, user.password);
        if (!isValidatePassword) {
            return res.status(404).json({ message: "Senha ou login incorreto!" })
        }

        const token = jwt.sign({ id: user.id }, "khk3jjkk2vk4j2vkv", { expiresIn: '1d' });
        user.password = "";

        return res.status(200).json({
            user,
            message: "Ok",
            token
        })
    }
}

export default new LoginAdminController();