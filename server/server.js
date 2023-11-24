import express from "express";
import cors from "cors";
import router from "./routes/userRoute.js";
import { Connection } from "./db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router);

Connection();
app.listen(8000, () => console.log("Listening on port 8000"));
