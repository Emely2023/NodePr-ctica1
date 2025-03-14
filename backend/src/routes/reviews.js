import express, { Router } from "express";
import reviewControllers from "../controllers/reviewControllers.js";

// Router () nos ayuda a colocar los métooos
//que tendrá mi ruta

const router = express.Router();

router.route("/")
.get(reviewControllers.getReviews)
.post(reviewControllers.createReviews)

router.route("/:id")
.put(reviewControllers.updateReviews)
.delete(reviewControllers.deleteReviews);

export default router;
