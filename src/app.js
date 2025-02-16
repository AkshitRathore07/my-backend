import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public")) //Store static things like imges or favicone

app.use(cookieParser()) //cookie parser no loger bundled with express so express.cookieParser can`t be used

app.get("/",(req,res)=>{
    res.send("yoho")
})

export {app}