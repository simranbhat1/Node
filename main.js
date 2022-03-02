const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const fs=require('fs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/bfhl",function(request,response){
    response.sendFile(__dirname+"/index.html");
})
app.post("/result",function(req,res){
    var c=req.body.dataa;
    c=c.toUpperCase();
    console.log(typeof c);
    var list=c.split(',');
    
    list.sort();
   list=list.toString();
    var todos=[];
    var r=[];
    fs.readFile("./api.json","utf-8",function(err,d){
        todos=JSON.parse(d);
        console.log(todos);
    for(var i=0;i<todos.length;i++){
        r=todos[i].t_data.toString();
        console.log(list);
        console.log(r);
        if(r===list)
      {  res.write("data found"+"\n"+"User Id:"+todos[i].user_id+"\nRoll No:"+todos[i].roll_number+"\nNumbers:"+todos[i].numbers+"\nAlphabets:"+todos[i].alphabets);
      res.send();
       
    }
  
     }
    
res.write("NO data found");
  res.send();
    })
    })
app.listen(3000,function(){
    console.log("Server is running");
})