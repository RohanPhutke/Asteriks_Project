import express from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import { Hostelperc } from "./routes/hostelperc.js";
import { complaint } from "./routes/complaintprogress.js";
import { StudentHome } from "./routes/studentLogin.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors()) 


  // Route to fetch occupancy data
app.get('/api/occupancy',Hostelperc);
app.get('/api/complaintProgress',complaint);
app.get('/api/studenthome',StudentHome);
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);

app.listen(8080, ()=>{
    console.log("Server listening on port 8080...");
})