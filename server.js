import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import hobbyRouter from "./routes/hobbyRoutes.js";
import mongoose from "mongoose";


dotenv.config();

const app = express();
const PORT = 4000;



mongoose
.connect(process.env.MONGO_URI)    
.then(() => {
console.log("Connected to MongoDB");
})
.catch((err) => {
console.error("MongoDB connection error:", err);
});




app.use(cors());
app.use(express.json());
 
// app.get("/", (req, res) => {
//     res.json({ ststus: "ok", message: "server is running" });
// });

// app.get("/my-hobby", (req, res) => {
//     res.json({ hobby: "ხატვა, სქროლვა, ფილმების ყურება, კითხვა, ვარჯიში და აშ." });
// });


app.use("/api/hobbies", hobbyRouter );


app.listen( PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
})