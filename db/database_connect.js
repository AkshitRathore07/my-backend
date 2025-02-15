import mongoose, { Mongoose } from "mongoose";
import express from "express"
import { DB_NAME } from "../src/constants.js"

const app = express()
export const dbconnect = async () => {

    try {
        const connectionhost=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`${connectionhost.connection.host}`)
        app.on("ERROR:", (error) => {
            console.log("ERROR:IN DB LINK", error)
        })
        app.listen(`${process.env.PORT}`, () => {
            console.log(`THE BACKEND WAS HOSTED ON LOCAL HOST ${process.env.PORT}`)
        })
    }
    catch (error) {
        console.log("ERROR:DATABASE CONNECTION", error)
    }
}
