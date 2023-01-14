let express = require('express');
let app = express();
let port = 6543;
let mongo = require('mongodb');
let MongoClient =  mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let cors = require('cors');
let bodyParser = require('body-parser');

let db;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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
    let query = {};
    let stateId = Number(req.query.stateId)
    let mealId = Number(req.query.mealId)
    if(stateId){
        query={state_id:stateId}
    }else if(mealId){
        query={"mealTypes.mealtype_id":mealId}
    }else{
        query={}
    }
    db.collection('restaurants').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })                                                                                                        
})

//meal data
app.get('/mealtype',(req,res) => {
    db.collection('mealType').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })                                                                                                        
})

//filter
app.get('/filters/:mealId',(req,res) => {
    let query = {};
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId)
    let hcost  = Number(req.query.hcost);
    let lcost = Number(req.query.lcost);
    let sort = {cost:1}
    if(req.query.sort){
        sort={cost:req.query.sort}
    }

    if(cuisineId){
        query={
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(hcost && lcost){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query={
            "mealTypes.mealtype_id":mealId,
        }
    }

    db.collection('restaurants').find(query).sort(sort).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })                                                                                                        
})

// Restaurant details
app.get('/details/:restId',(req,res) => {
    let restId = Number(req.params.restId)
    //let restId = mongo.ObjectId(req.params.restId)
    db.collection('restaurants').find({restaurant_id:restId}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })                                                                                                        
})


// menu details
app.get('/menu/:restId',(req,res) => {
    let restId = Number(req.params.restId)
    db.collection('menu').find({restaurant_id:restId}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })                                                                                                        
})

// menu details
app.post('/menuItem',(req,res) => {
    if(Array.isArray(req.body.id)){
        db.collection('menu').find({menu_id:{$in:req.body.id}}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        }) 
    }else{
        res.send('Invalid Input')
    }                                                                                                    
})

// placeOrder 
app.post('/placeOrder',(req,res)=>{
    db.collection('orders').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order added')
    })
})

// orders details
app.get('/orders',(req,res) => {
    let email = req.query.email;
    let query = {}
    if(email){
        query={email:email}
    }
    db.collection('orders').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })                                                                                                        
})


//update Order
app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('orders').updateOne(
        {orderId:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date,
            }

        },(err,result) => {
            if(err) throw err;
            res.send('data updated')
        }
    )
})

//delete Order
app.delete('/deleteOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('orders').remove(
        {orderId:oid},(err,result) => {
            if(err) throw err;
            res.send('data Deleted')
        }
    )
})


//Connecting with Db
MongoClient.connect(mongoUrl,(err,connection)=>{
     if(err) console.log('Error while connecting')
     db = connection.db('internfeb')
     app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
     })
})


// app.get('/restaurants/:stateId',(req,res) => {
//     console.log(req.params.stateId)
//     let stateId = Number(req.params.stateId)
//     db.collection('restaurants').find({state_id:stateId}).toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)
//     })                                                                                                        
// })