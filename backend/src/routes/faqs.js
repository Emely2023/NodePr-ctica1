import express from "express";
import faqsController from "../controllers/faqsController.js"

const router = express.Router();

router
.route("/")
.get(faqsController.getAllfaqs)
.post(faqsController.insertFaqs)

router
.route("/:id")
.put(faqsController.updateFaqs)
.delete(faqsController.deleteFaqs);

export default router;