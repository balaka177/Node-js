var http=require('http');
http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/html'});
    res.end('Purushottam Balaka');
}).listen(4000)