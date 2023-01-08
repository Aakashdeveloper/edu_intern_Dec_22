let express = require('express');
let app = express();
let port = 6543;
let mongo = require('mongodb');
let MongoClient =  mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let cors = require('cors');
let db;

app.use(cors())

app.get('/',(req,res) => {
    res.send("Hii From Express")
})

app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })                                                                                                        
})

app.get('/restaurants',(req,res) => {
    db.collection('restaurants').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })                                                                                                        
})

//Connecting with Db
MongoClient.connect(mongoUrl,(err,connection)=>{
     if(err) console.log('Error while connecting')
     db = connection.db('internfeb')
     app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
     })
})
