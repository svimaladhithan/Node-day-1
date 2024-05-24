import express from "express";

const app = express();
const PORT=4000;

app.use(express.json());

//routes
app.get('/',(req,res)=>{
    
    //res.status(200).json({message:"First node app"})
    //res.status(200).send("Welcome to the app")
    res.status(200).send(`<div Style="Background-color:Red;Color:Yellow"><h1>Vimal</h1></div>`)
})

app.listen(PORT,()=>console.log(`App is running on port= ${PORT}`))