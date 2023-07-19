require("dotenv").config();

const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const mongoose=require('mongoose');


const NotesRoutes=require("./routes/Notes");


const app=express();

app.use(express.json())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

//middleware
const corsOptions={
   origin:"https://dkeeper-app-client.onrender.com"
}

app.use(cors(corsOptions));



app.use("/api/notes",NotesRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("don't worry server has be started and listing to at port",process.env.PORT);
    }) 
  })
  .catch(()=>{
    console.log("error")
  })







