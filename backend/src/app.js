import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { limiter } from "./middlewares/rateLimit/middleware.js";
import routes from "./routes/index.js";
import { FRONTEND_URL } from "./config/env.js";
import globalErrorHandler from "./middlewares/globalError/middleware.js";

const app = express();

// Trust proxy (important in production)
app.set("trust proxy", 1);
app.disable("x-powered-by");

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);

// Parsers
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// Rate limiter
app.use(limiter);

// Routes
app.use("/api/v1", routes);

// Error Handling Middleware
app.use(globalErrorHandler);

// Export app for server.js
export default app;
