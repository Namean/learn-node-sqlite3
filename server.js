// APPLICATION
const express = require('express')
const app = express()


// CONFIG: FILES
const fs = require('fs')
const bodyParser = require("body-parser");

// CONFIG: APPLICATION
const port = 3000
const cors = require("cors");

// CONFIG: EXPRESS | CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// CONFIG: EXPRESS | STATIC FILES
// http://expressjs.com/en/starter/static-files.html {0}
// http://expressjs.com/en/starter/basic-routing.html {1}

// {0}
app.use(express.static("public"));

// {1}
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// ROUTES: EXPRESS
app.get('/', (req, res) => {
  res.send('API is working correctly!')
})

app.post('/data', (req, res) => {
	console.log('API is working correctly');
	res.send('API is working correctly')
})

// CONFIG: DATABASE | SQLite3

const sqlite3 = require('sqlite3').verbose();

let db, databaseName

databaseName = './chinook.db'
db = new sqlite3.Database(databaseName)

// ROUTES: SQLite3

// app.get('/test', (req, res) => {
// 	databaseQuery = "SELECT Name, Composer from tracks LIMIT 2;"
// 	db.serialize(function() {
// 		// db.run(databaseQuery);
// 	  	db.each(databaseQuery, function(err, row) {
	  	
// 	  	// console.log(jsonData);
//       	res.json(row);
//   	});
// })

// db.close();
// })


app.get('/test', (req, res) => {
	databaseQuery = "SELECT Name, Composer from tracks LIMIT 20;"
	db.all(databaseQuery, (err, rows) => {
    res.send(JSON.stringify(rows));
  });
	db.close();
})

// SERVER

let timestamp = new Date().toLocaleTimeString()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} \n @${timestamp}`)
})