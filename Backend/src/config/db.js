import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.1"]);

const connectDB = async () => {
    try{
         await mongoose.connect(process.env.MONGODB_URI);
         console.log("Database connected successfully");
    }
    catch(error){
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
    }
};

export default connectDB;