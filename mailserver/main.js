const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport(
    {
        service: "GMail",
        auth: {
            user: 'oleksvlas@gmail.com',
            pass: 'ShurikVl@s1988'
        }
    }
);

smtpTransport.sendMail(
    {
        from: 'Slaytone <slavaslaytone@gmail.com>',
        to: 'Rodin <rodinslava@gmail.com>',
        subject: "test",
        html: "<div style='color: aqua'> Hello</div>"
    }, (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("Message sent");
        }
        smtpTransport.close(0);
    }
);