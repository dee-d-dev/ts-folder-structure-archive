import express from "express";
import HealthController from "./health.controller";

let router = express.Router();
let health = new HealthController();
router.get("/health", health.live);
