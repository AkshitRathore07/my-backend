import dotenv from "dotenv"
import express from "express"
import { dbconnect } from "./db/database_connect.js"
import {app} from "./app.js"

dotenv.config({
    path: './env'
})
dbconnect()
.then(()=>{
    app.on("error",(err)=>{
        console.log("ERROR: IN THEN FOR DB",err)
    })
    app.listen(process.env.PORT||8000,()=>{
        console.log(`APP WAS HOSTED ON ${process.env.PORT}`)
    })
})
.catch()
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