import express from "express";
import { userController } from "../controller/userController.js";
import { getUserController } from "../controller/getUserController.js";
import conversationController from "../controller/conversationController.js";
import { getConversationController } from "../controller/getConversationController.js";
import { newMessageController } from "../controller/newMessageController.js";
import { getMessagesController } from "../controller/getMessagesController.js";
import { getImagecontroller } from "../controller/getImagecontroller.js";

const router = express.Router();

router.post("/add", userController);
router.get("/users", getUserController);

router.post("/conversation/add", conversationController);
router.post("/conversation/get", getConversationController);

router.post("/message/add", newMessageController);
router.get("/message/get/:id", getMessagesController);

router.post("/file/upload", upload.single("file"), getImagecontroller);

export default router;
