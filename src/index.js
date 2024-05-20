import express from 'express';
const app=express();
const PORT=process.env.PORT ||3000;

app.get("/",(request,response)=>{response.send({msg:"Hello!"})});

app.get("/api/users",(request,response)=>{response.send([{id:1,username:"anson",displayname:"Anson"},
{id:2 ,username:"satavisa",displayname:"Satavisa"},
{id:3,username:"dia",displayname:"Dia"},
{id:4,username:"riya",displayname:"Riya"}])});

app.get("/api/products",(request,response)=>{response.send([{id:1,dish:"chicken breast",price:12.99},
{id:2,dish:"chicken tandoori",price:13.99}])})

app.listen(PORT,()=>{
  console.log(`Running on Port ${PORT}`);
});
