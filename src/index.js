import dotenv from "dotenv"
import express from "express"
import { dbconnect } from "../db/database_connect.js"

dotenv.config({
    path: './env'
})
dbconnect()
// const app = express();

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("error", error)
//             throw error
//         })
//         app.listen(3000, console.log("Success"))
//     }
//     catch (error) {
//         console.log("error hora bhai database connection me", error);
//         throw error
//     }
// })()