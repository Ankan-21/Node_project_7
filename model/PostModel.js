const mongoose=require('mongoose');
const Schema=mongoose.Schema

const PostSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    subtitle:{
        type:String,
        required:true,
    },
    author:{
        type: Schema.ObjectId,
        ref: 'author'
    },
    postContent:{
        type:String,
        require:true
    }
    
})

const PostModel=new mongoose.model('post', PostSchema)
module.exports=PostModel;