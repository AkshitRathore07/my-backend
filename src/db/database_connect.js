import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"


export const dbconnect = async () => {

    try {
        const connectionhost=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`${connectionhost.connection.host}`)
    }
    catch (error) {
        console.log("ERROR:DATABASE CONNECTION", error)
    }
}
