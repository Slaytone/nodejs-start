// see

const db =  require('mysql');
const dbConnection = db.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'test_db'

});

dbConnection.connect((err)=> {
   if (err) throw err;
   console.log('mysql connected..')
});

// let sql = 'create database test_db';
// dbConnection.query(sql, (err, res) =>{
//     if (err) throw err;
//     console.log(sql,' done');
// });

let sql = 'create table product (id INT not null AUTO_INCREMENT, code varchar(20) not null, name varchar(200), primary key (id))';
//let sql = 'drop table product';
dbConnection.query(sql, (err, res) =>{
    if (err) throw err;
    console.log(sql,' done');
});






dbConnection.end();


