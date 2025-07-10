const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=='/0'){
        res.end(`
            <h1>Hello from sharpener</h1>
            <h2>Haiii</h2>`)
    }
})
server.listen(3000,()=>{
    console.log("server is running")
})