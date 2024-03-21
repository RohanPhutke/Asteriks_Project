import express from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);

app.listen(8080, ()=>{
    console.log("Server listening on port 8080...");
})