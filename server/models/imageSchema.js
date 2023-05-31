const mongoose = require("mongoose")

const imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        image: Buffer,
        contentType: String,
        name:String
    }
    ,
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const imageModel = mongoose.model("Images", imageSchema)
module.exports = imageModel