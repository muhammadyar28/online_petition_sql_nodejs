const { faker } = require('@faker-js/faker');

// Connect to SQL server

let mysql = require('mysql');
 
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'petition_data'
});

// Insert Data
// When inserting data into a SQL database JS converts the date formart to work with JavaScript 

let data = [];

for (let i = 0; i < 569; i++){
	data.push([
		faker.internet.email(),
		faker.date.past()
]);
};

let q = 'INSERT INTO users (email, created_at) VALUES ?'

connection.query(q, [data], function(error, result) {
	console.log(error);
	console.log(result);
});

connection.end();
