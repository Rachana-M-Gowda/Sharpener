const http=require('http')
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
                let combinedbuffer=Buffer.concat(datachunks);
                console.log(combinedbuffer.toString)
                let value=combinedbuffer.toString.split("=");
                console.log(value)
            })
          }
    }
})
server.listen(8002, ()=>{
    console.log("server is running")
})