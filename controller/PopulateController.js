const Author = require('../model/Author')
const Post = require('../model/PostModel')


const create = async (req, res) => {
    try {
        const auth = await new Author({
            name: req.body.name,
            phone: req.body.phone,
            subject: req.body.subject,

        })
        const Result = await auth.save();
        res.status(201).json({ success: true, msg: "data saved successfully", data: Result })
    }
    catch (ex) {
        console.log(ex);
        res.status(404).json({ success: false, msg: "not saved" })
    }


}
const alldata = async (req, res) => {
    try {
        
        const Result = await Author.find();
        res.status(201).json({ success: true, msg: "data saved successfully", data: Result })
    }
    catch (ex) {
        console.log(ex);
        res.status(404).json({ success: false, msg: "not saved" })
    }


}

const store=async(req,res)=>{

    try {
        const auth = await new Post({
            title: req.body.title,
            subtitle: req.body.subtitle,
            author: req.body.author,
            postContent: req.body.postContent,

        })
        const Result = await auth.save();
        res.status(201).json({ success: true, msg: "data saved successfully", data: Result })
    }
    catch (ex) {
        console.log(ex);
        res.status(404).json({ success: false, msg: "not saved" })
    }
}


const allpost = async (req, res) => {
    try {
        
        const Result = await Post.find();
        res.status(201).json({ success: true, msg: "data saved successfully", data: Result })
    }
    catch (ex) {
        console.log(ex);
        res.status(404).json({ success: false, msg: "not saved" })
    }


}


const all = async (req, res) => {
    try {
        
        const Result = await Post.find().populate('author').exec();
        res.status(201).json({ success: true, msg: "data saved successfully", data: Result })
    }
    catch (ex) {
        console.log(ex);
        res.status(404).json({ success: false, msg: "no data found" })
    }


}

module.exports = {
    create,alldata,store,allpost,all
}