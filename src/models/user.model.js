import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userschema= new Schema({
    username:{
        type: String,
        required:[true,"username is required"],
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        trim:true,
        lowercase:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
    },
    avatar:{
        type:String, //ulr
        required:true
    },
    coverImage:{
        type:String, //ulr
        required:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Vedio"
    }],
    refreshToken:{
        type:string
    }

},{timestamps:true})

userschema.pre("save",async function(next){
    if(!this.isModified("password")) return
 this.password= await bcrypt.hash(this.password,10)
    next()
})

userschema.methods.isPasswordCorrect=async function(password){
   return await bcrypt.compare(password,this.password)
}

userschema.methods.generateAccessToken=function(){
   return jwt.sign({
        _id:this._id,
        username:this.username,
        email:this.email,
        fullName:this.fullName,

    },
    process.env.REFRESH_TOKEN_SECRET
    ,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
userschema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:this._id,
        username:this.username,
        email:this.email,
        fullName:this.fullName,

    },
    process.env.ACCESS_TOKEN_SECRET
    ,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
export default User=mongoose.model("User",userschema)