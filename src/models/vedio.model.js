import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioschema= new Schema({
vedioFile:{
    typr:String,
    required:true
},
thumbnail:{
    typr:String,
    required:true
},
owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
},
title:{
    typr:String,
    required:true
},
discription:{
    typr:String,
    required:true
},
views:{
    typr:String,
    default:0
},
isPublished:{
    typr:Boolean,
},
duration:{
    typr:string,
    required:true
},

},{timestamps:true})

vedioschema.plugin(mongooseAggregatePaginate)

export default Vedio=mongoose.model("Vedio",vedioschema)