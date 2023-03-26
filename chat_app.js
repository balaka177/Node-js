const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res) =>{
    res.setHeader('content-type','text/html');
    const url=req.url;
    const method=req.method; 
    const file1=fs.readFileSync('/home/vijay/Music/message.txt');
    const file=file1.toString();
    console.log(file);
    res.write(file);
    if(url==='/'){
        
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action ="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    
    console.log(method);
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk) =>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
            res.statusCode=302;
            //res.setHeader('location','/home/vijay/Music');
            
            return res.end();
            

        })
        
    }
});
server.listen(8080);