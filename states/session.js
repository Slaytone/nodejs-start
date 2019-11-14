let express = require('express');
let expressSession = require('express-session');
const mongoStore = require('connect-mongo')(expressSession);
let app = express();
let store = new mongoStore({
    url: 'mongodb://localhost:27017/test-app'
});

app.use(expressSession({
    store,
    resave: false,
    saveUninitialized: false,
    secret: 'secret key'
}));

app.use('/', (req,res) =>{
    console.log(req.session);
    req.session.numbReq = req.session.numbReq + 1;
    let reqCount = () => {
        return isNaN(req.session.numbReq) ? 0 : req.session.numbReq;
    };

    res.end(reqCount().toString());

});


app.listen(8888, () =>{
    console.log('Started....');
});
