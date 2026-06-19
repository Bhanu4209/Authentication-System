import {Router} from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router();


/**
 * POST /api/auth/register
 * 
 */

authRouter.post("/register",authController.register)

/**
 * GET /api/auth/get-me
 */

authRouter.get("/get-me",authController.getMe)

/**
 * POST /api/auth/refresh-token
 */
authRouter.post("/refresh-token",authController.refreshToken)

export default authRouter;