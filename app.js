const http = require('http');

const server = http.createServer((req, res)=>{
    var a = 8;
    var b = 4;
    c = a+b;
    res.write("sum is "+c);
    res.end()
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Server is running on 8000");
});
