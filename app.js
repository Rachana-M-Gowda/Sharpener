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
    }
})
server.listen(3003, ()=>{
    console.log("server is running")
})