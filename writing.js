const http=require('http')
const fs=require("fs")
const server=http.createServer((req,res)=>{
    
    const url=req.url;
    const method=req.method;

    if(req.url==='/'){
        //form
        res.setHeader('Content-type','text/html');
        res.end(
            `
            <form>
                <label>Name:</label>
                <input type="text" name="username"></input>
                <button type="submit">Add</button>
            </form>
            `
            
        );
    }else{
          if(req.url=='/message'){
            res.setHeader('Content type','text/html');
            let datachunks=[];
            req.on('data',(chunks)=>{
                console.log(chunks)
                datachunks.push(chunks);
            })
            req.on('end',()=>{
                let buffer=Buffer.concat(body);

                console.log(buffer);

                let formData=buffer.toString();
                console.log(formData);

                const formValues=formData.split("=")[1];

                fs.writeaFile('formValues.txt',formValues,(err)=>{
                    res.statusCode=302;
                    res.setHeader('Location','/');
                    res.end();
                })
            })
          }
    }
})
server.listen(8002, ()=>{
    console.log("server is running")
})