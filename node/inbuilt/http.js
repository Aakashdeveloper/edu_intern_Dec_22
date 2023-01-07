let http = require('http');

// req > what we pass to server (params,queryparam,body)
// res > what server return

let server = http.createServer(function(req, res){
    res.write('<h1> Hi from NodeJs Code App</h1>');
    res.end()
})

server.listen(7801)