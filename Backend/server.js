import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/config/db.js";



connectDB();

app.listen(3000 ,()=>{
    console.log("Server listening to port ", process.env.PORT);
});