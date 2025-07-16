const express=require('express')
const db=require('./utils/db-connection');
const studentRoutes=require('./routes/studentsRoutes');
const app=express();


//models
const studentModel=require('./models/students')

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.use("/students",studentRoutes);

db.sync({force:true}).then((err)=>{
    app.listen(3000,(err)=>{
        console.log("Server is running");
    })
}).catch((err)=>{
    console.log(err);
})

app.listen(3000,(err)=>{
    console.log("Server is running");
})