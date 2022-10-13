import { Router } from 'express';
import deleteAdminController from 'src/controller/userController/deleteUserController';
import { verifyToken } from 'src/middleware/authVerifyToken';
import { rolesUser } from 'src/middleware/verifyRoles';
import CreateUserController from '../controller/userController/createUserController';
import LoginUserController from '../controller/userController/loginUserController';
import DeletUserController from '../controller/userController/deleteUserController'
import updateUserController from 'src/controller/userController/updateUserController';
const router = Router();


router.post('/registerUser', CreateUserController.createUserController);
router.post('/login', [verifyToken, rolesUser], LoginUserController.loginController);
router.delete('/deleteUser/:id', [verifyToken, rolesUser], DeletUserController.deleteUserController);
router.put('/alterUser/:id', [verifyToken, rolesUser], updateUserController.updateAdminController);

export default router;