import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";///plugin

const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type:String,//cloudinary url
            required:true
        },
        thumbnail:{
            type:String,//cloudinary url
            required:true
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:Number,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number,
            default:0,
        },
        isPublished:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)///apply plugin

export const Video = mongoose.model("Video" , videoSchema)