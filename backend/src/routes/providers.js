// src/routes/providers.routes.js
import express from "express";
import multer from "multer";
import providerController from "../controllers/providersController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", providerController.getAllProviders);
router.post("/", upload.single("image"), providerController.insertProviders);
router.put("/:id", upload.single("image"), providerController.updateProvider);
router.delete("/:id", providerController.deleteProvider);

export default router;
