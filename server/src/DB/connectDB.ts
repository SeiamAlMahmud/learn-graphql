import mongoose from "mongoose";

export const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI || "", {
            dbName: "graphql",
        })
        .then(() => {
            console.log("Connected to MongoDB " + mongoose.connection.name);
        }).catch((error) => {
        console.log("connection error", error);
        });
    } catch (error) {
        console.log(error)
    }
}