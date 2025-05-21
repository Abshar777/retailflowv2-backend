import express from "express";
import connectDB from "./config/db.config";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import ExpressMongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";

connectDB();

dotenv.config();
const app = express();
const allowedOrigins = [
    process.env.FRONTEND_URL as string,
    process.env.ADMIN_URL as string
];



// -------------------- cookie parser middleware-------------------------------
app.use(cookieParser())

// -------------------- cors middleware-------------------------------
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                // console.log(origin, "origin when cors is used");
                callback(null, origin);
            } else {
                // console.log(origin, "origin when cors is not used");
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
        methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);


// -------------------- cors options middleware-------------------------------
app.options("*", (req, res) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin as string)) {
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.sendStatus(204);
    } else {
        res.status(403).send("CORS Preflight Request Not Allowed");
    }
});



// -------------------- body parser middleware-------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// -------------------- sanitize middleware-------------------------------
app.use(ExpressMongoSanitize())



// -------------------- logger middleware-------------------------------
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));




// -------------------- health check route-------------------------------
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});






app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


