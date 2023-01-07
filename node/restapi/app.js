let express = require('express');
let app = express();
let port = 6543;

app.get('/',(req,res) => {
    res.send("Hii From Express")
})

app.get('/location',(req,res) => {
    res.send("Hii From location Route")
})

app.listen(port)