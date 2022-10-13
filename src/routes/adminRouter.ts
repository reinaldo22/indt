import { Router } from 'express';
import { verifyToken } from 'src/middleware/authVerifyToken';
import { rolesAdmin } from 'src/middleware/verifyRoles';
import UpdateAdminController from '../controller/AdminController/updateAdminController';
import CreateAdminController from '../controller/AdminController/createAdminController';
import LoginAdminController from '../controller/AdminController/loginAdminController';
import DeleteAdminController from '../controller/AdminController/deleteAdminController';

const router = Router();

router.post('/registerAdmin', CreateAdminController.createAdminController);
router.put('/alterAdmin/:id', [verifyToken, rolesAdmin], UpdateAdminController.updateAdminController);
router.post('/loginAdmin', [verifyToken, rolesAdmin], LoginAdminController.loginController);
router.delete('/deleteAdmin/:id', [verifyToken, rolesAdmin], DeleteAdminController.deleteAdminController);

export default router;