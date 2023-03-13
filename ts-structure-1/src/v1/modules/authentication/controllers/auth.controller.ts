import { Request, Response } from "express";
import AuthService from "../services/auth.service";

let authService = new AuthService();
class AuthController {
  signUp(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = authService.signUp(email, password);

    res.status(200).json(user);
  }

  signIn(req: Request, res: Response) {
    res.send("sign in");
  }
}

export default AuthController;
