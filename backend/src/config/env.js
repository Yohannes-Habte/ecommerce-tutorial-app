import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;

export const MONGO_URI = process.env.MONGO_URI;

export const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW);
export const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX);

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export const FRONTEND_URL = process.env.FRONTEND_URL;

export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;