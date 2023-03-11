import { Request, Response } from "express";

class HealthController {
    live(req: Request, res: Response) {
        res.send("API is live")
    }
}

export default HealthController