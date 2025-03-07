import express, { Router } from "express";
import { get } from "mongoose";
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();

router.route("/")
.get()
.post()
.put()
.delete()