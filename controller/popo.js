
const Author= require('../model/Author')
const models= require('../model/postmodel')


const create= async(req,res)=>{
    try {
        
        const auth= await new Author({

            name:req.body.name,
            phone:req.bodt.phone
        })

        const result= await auth.save()

        res.status(201).json({success:true,msg:"data saved",data:result})
    } catch (error) {
        res.status(404).json({success:false,msg:"data not found"})
        
    }
}

const alldata= async(req,res)=>{

    try {
        const result= await auth.find()
        res.status(201).json({success:true,msg:"data saved",data:result})
    } catch (error) {
        res.status(404).json({success:false,msg:"data not saved"})
    }
}

const store= async(req,res)=>{
    try {
        const auth= await new Post({

            name:req.body.name,
            subtitle:req.body.subtitle,
            author:req.body.author
        })

        const result= await auth.save()
        res.status(201).json({success:true,msg:"data saved ",data:result})
    } catch (error) {
        res.status(404).json({success:false,msg:"data not found"})
    }
}

const allpost= async(req,res)=>{

    try {
        const result= await post.find()
        res.status(201).json({success:true,msg:"data saved",data:result})
    } catch (error) {
        res.status(404).json({success:false,msg:"data not saved"})
    }
}

const all= async(req,res)=>{

    try {
        const result= await post.find().populate('author').exec()
        res.status(201).json({success:true,msg:"data saved",data:result})
    } catch (error) {
        res.status(404).json({success:false,msg:"data not saved"})
    }
}

module.exports={create,alldata,allpost,store,all}
