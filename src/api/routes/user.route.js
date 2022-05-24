import express from "express";
const router = express.Router();
import userController from "../controllers/user.controller.js"

router.post('/', userController.signup);
router.get('/', userController.readUser);
router.get('/login', userController.loginUser);
router.get('/logout', userController.logoutUser);
router.get('/refresh', userController.tokenRefresh);
router.get('/:id', userController.readOneUser);
router.put('/info/:id', userController.updateUserInfo);
router.put('/password/:id', userController.updateUserPassword);
router.delete('/:id', userController.deleteUser);

export default router;