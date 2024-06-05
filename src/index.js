import express from 'express';
const app=express();
const PORT=process.env.PORT ||3000;

app.get("/",(request,response)=>{response.send({msg:"Hello!"})});
const mockUsers=[{id:1,username:"anson",displayname:"Anson"},
{id:2 ,username:"satavisa",displayname:"Satavisa"},
{id:3,username:"dia",displayname:"Dia"},
{id:4,username:"riya",displayname:"Riya"}];
app.get("/api/users",(request,response)=>{
  console.log(request.query);
  const {query:{filter,value}}=request;
  if(!filter && !value){
      return response.send(mockUsers);
  }
  
  if(filter && value){
    return response.send(mockUsers.filter((user)=>user[filter].includes(value)))
  }
  return response.send(mockUsers);
  
});

app.get("/api/users/:id",(request,response)=>{
  console.log(request.params);
  const parsedId=parseInt(request.params.id);
  console.log(parsedId);
  if(isNaN(parsedId))
    return response.status(400).send({msg:"Bad Request.Invalid ID"});
  const findUser=mockUsers.find((user)=>user.id===parsedId);
  if(!findUser)
      return response.sendStatus(404);
    return response.send(findUser);
})
app.get("/api/products",(request,response)=>{response.send([{id:1,dish:"chicken breast",price:12.99},
{id:2,dish:"chicken tandoori",price:13.99}])})

app.listen(PORT,()=>{
  console.log(`Running on Port ${PORT}`);
});
