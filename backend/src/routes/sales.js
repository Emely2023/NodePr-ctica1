import express from "express";
import salesController from "../controllers/salesController.js";

const router = express.Router();

 
router.route("/").post(salesController.insertSales)
router.route("/category").get(salesController.salesByCategory)
router.route("/best-product").get(salesController.bestSeller)
router.route("/frequent-customer").get(salesController.frecuentCustomer)
router.route("/total-earnings").get(salesController.totalEarnings)

export default router;
