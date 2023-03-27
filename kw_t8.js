const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res) =>{
    res.setHeader('content-type','text/html');
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action ="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
        
      
    }
    
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);

        });
        req.on('end',() =>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody);
            const message=parseBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
            //console.log(message);
            
            res.statusCode=302;
            res.setHeader('location','/');
            return res.end();

        });


        
        
    }
    
      
    
    res.write('<html>');
    res.write('<head><title>First page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');

})
server.listen(8080);
