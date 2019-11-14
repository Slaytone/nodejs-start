let express = require('express');
let app = express();
let Cookies = require('cookies');
let cookieParser = require('cookie-parser');

//app.use(cookieParser("Secret string"))

app.use('/', (req, res)=>{
    let cookies = new Cookies(req, res, {"keys":['Secret_key_str']});

    let cookieOption = {
        maxAge: 30000,
        secure: false, //condition of pass by https
        signed: true
    };

    cookies.set('username', 'name');
    cookies.set('admin', 'true', cookieOption);
    res.cookie("login", "admin", {maxAge:10000, signed:true})

    console.log(cookies.get('admin'));
    res.sendFile(__dirname + "/index.html");
    res.cookie("password", "pswrd", {maxAge:10000})

    console.log(req.cookies);
    //req.signedCookie()
    //res.clearCookie("password");
    res.end();

});

app.get('/', (req, res)=>{
    console.log("I'm here!!");


    res.cookie("password", "pswrd", {maxAge:10000})

    console.log(res.cookies);
    //req.signedCookie()
    //res.clearCookie("password");
    res.end();
});

app.listen(8888, () =>{
    console.log('Started....')
})
