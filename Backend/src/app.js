import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dns from "dns";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import authRoutes from "./routes/auth.routes.js";
import { globalErrorHandler, notFound } from "./middlewares/error.middleware.js";
import { apiLimiter } from "./middlewares/rateLimiter.js";
import userRoutes from "./routes/user.routes.js"

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

const app = express();

app.use(morgan("dev"));
app.use(helmet());

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(cookieParser(process.env.COOKIE_SECRET));

//app.use(mongoSanitize());

app.use("/api", apiLimiter);

const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(
          new Error(`CORS policy: origin ${origin} is not allowed`)
        );
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SkyWay API is operational",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
  });
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/user" ,userRoutes);

// 404 handler
app.use(notFound);

//globale error handler
app.use(globalErrorHandler);

export default app;