var http = require('http')
const fs=require('fs')
const path=require('path')
const hostname='127.0.0.1';

const express=require('express');
const app=express();

const port=8000;

const server=http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-Type':'text/html'})
    var url= request.url;
    // console.log(url);
    if(url=='/'){
        fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data)=>
        {
            if(err) throw err;
            response.end(data);
        });    // response.end('<h1 style="color:red">Welcome to MCA</h1>');
}
const{readFileSync}=require('fs');
var load=()=>JSON.parse(readFileSync('jsonfile.json'));
module.exports={load};

app.get('/user',(req,res)=>
{
    res.send(load());
});

// else if(url=='/about'){
//         fs.readFile(path.join(__dirname,'about.html'),'utf-8',(err,data)=>
//         {
//             if(err) throw err;
//             response.end(data);
//         });    
// }
// else if(url=='/contact'){
//     fs.readFile(path.join(__dirname,'cntact.html'),'utf-8',(err,data)=>
//     {
//         if(err) throw err;
//         response.end(data);
//     });    
// }
});
server.listen(port,hostname,()=>
{
    console.log('Node Js Server hosting at %s on port %s',hostname,port);
});

