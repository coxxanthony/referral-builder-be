import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { compress } from "express-compress";
import referralRoutes from "./routes/referralRoutes";

dotenv.config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Too many requests, please try again later",
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();
app.use(cors(corsOptions));
app.use(compress());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10kb" }));
app.use(helmet());
app.use(limiter);

app.use("/api/referrals", referralRoutes);

export default app;
