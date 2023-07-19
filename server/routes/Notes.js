const express =require("express");
const routes=express.Router();
const Note=require("../models/NoteModel")
const mongoose=require('mongoose')


routes.get("/",async (req,res)=>{
   const Notes=await Note.find({}).sort({createAt: -1})
   
   res.status(200).json(Notes)

})

routes.post("/",async (req,res)=>{

    const{title,content}=req.body
    try{
      const Notes=  await Note.create({title,content})
      res.status(200).json(Notes)
    }
    catch(error){
     res.status(400).json({"error":error.message})
    }

})

routes.delete("/:id",async (req,res) => {

    const { id }=req.params
   
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Note"})
    }

    const Notes=await Note.findByIdAndDelete({_id: id})

    if(!Notes){
        return res.status(400).json({error:"No such workout"})
    }

    res.status(200).json(Notes)
})


module.exports=routes;