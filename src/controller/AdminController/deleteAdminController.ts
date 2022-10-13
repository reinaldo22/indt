import { Request, Response } from 'express';
import { User } from 'src/models/User';
import bcrypt from 'bcryptjs';

class DeletAdminController {

    public async deleteAdminController(req: Request, res: Response) {

        
        const user = await User.findOne({ where: { id: parseInt(req.params.id) } });

        if (!user) {
            return res.status(404).json({ message: "Usuario inexistente" })
        }

        await User.delete(user.id);
        return res.status(200).json("Deletado com sucesso!")
    }

}

export default new DeletAdminController();