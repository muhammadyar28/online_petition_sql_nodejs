let mysql = require('mysql');
let express = require('express');
let app = express();
let bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'petition_data'
});

// Client computer types in name of the app
// Request is sent to Express App for the "/" page
// '/' and nothing would be the home page

app.get("/", function(req, res){
	let q = "SELECT COUNT(*) AS count FROM users";
	connection.query(q, function(err, results){
		if(err) throw err;
		let count = results[0].count;
		// res.send("We have " + count + " users in our db");
		res.render("home", {data: count});
	});
});

app.post("/register", function(req, res){
	let person = {
		email: req.body.email
	};
	connection.query("INSERT INTO users SET ?", person, function(err, result){
		if(err) throw err;
		res.redirect("/");
	});
});

// This code below starts the server.
app.listen(3000, function () {
// This code will run in our terminal indicating our server is running
 console.log('Server running on 3000!');
});

