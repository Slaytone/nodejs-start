const db =  require('mongodb');
const dbClient = db.MongoClient;

let connectionStr = 'mongodb://localhost:27017/';

dbClient.connect(connectionStr,  { useUnifiedTopology:true }, (err, dbobj) => {
    if (err) throw err;
    let myDB = dbobj.db("test")
    let collection =   myDB.collection('users');

    let user = {name: 'John', age: 33};

    collection.insertOne(user, (err, res) => {
        if (err) throw err;
        console.log(res.ops);
    });

    let users = [{name: 'Sam', age: 23},
        {name: 'Pol', age: 43}
    ];

    collection.insertMany(users, (err, res) => {
        if (err) throw err;
        console.log(res.ops);
    });

    collection.find().toArray((err,res) =>{
       console.log(res);
    });

    collection.find({name: 'Sam'}).toArray((err,res) =>{
        console.log(res);
    });

    collection.findOne().then((res) =>{
        console.log(res);
    });

    collection.findOneAndUpdate({age: 23}, {$set:{age:55}}, (err, res) => {
        if (err) throw err;
        console.log(res.value);
    });

    collection.updateMany({age: 33}, {$set:{age:77}}, (err, res) => {
        if (err) throw err;
        console.log(res.modifiedCount);
    });

    collection.deleteOne({name: 'Sam'},  (err, res) => {
        if (err) throw err;
        console.log(res.deletedCount);
    });

    console.log(collection.count);


    //delete all objs in collection
    collection.deleteMany({},  (err, res) => {
        if (err) throw err;
        console.log(res.deletedCount);
    });



    console.log('MongoDB connected...');
    dbobj.close();

});


