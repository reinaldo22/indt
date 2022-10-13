
import { NextFunction, Request, Response } from 'express'
import { User } from 'src/models/User';

export const rolesAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.userId;

    
    const admin = await User.findOne({where: {id: parseInt(req.params.id)}})
    
    if (admin?.role !== 'admin') {
        return res.status(401).json({ message: 'Usuario sem permissão'});
    }

    next();

    
}

export const rolesUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.userId;



    const user = await User.findOne({where: {id: parseInt(req.params.id)}})
    
    if (user?.role !== 'cliente') {
        return res.status(401).json({ message: 'Usuario sem permissão'});
    }

    next();


}