const http=require('http');

const server=http.createServer((req,res) => {
    

    console.log(req.url,req.method,req.method);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>First page</title></head>');
    res.write('<body><h1>Welcome to my node js project</h1></body>');
    res.write('</html>');
    res.end();

    

});
server.listen(8080);