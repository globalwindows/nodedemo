var express=require('express');
var nodemailer = require("nodemailer");
var config = require('./config');

var app = express();

var smtpTransport = nodemailer.createTransport("SMTP", 
    {
    service: "Gmail",
    auth: {
        user: config.auth.user,
        pass: config.auth.pass
    }
});

app.use(express.static(__dirname + '/'));

app.get('/',function(req,res){
   res.sendfile('index.html');
});

app.get('/send',function(req,res){
	console.log( req.query.subject);
	var mailOptions={
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text
	}
	console.log(mailOptions);

	smtpTransport.sendMail(mailOptions, function(error, response){
        if (error) {
			console.log(error);
			res.end("error");
        } else {       
			console.log("Message sent: " + response.message);
			res.end("sent");
		}
	});
});

app.listen(3000,function(){
	console.log("Express Started on Port 3000");
});