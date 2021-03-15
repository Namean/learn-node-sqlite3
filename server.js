const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require("body-parser");

// CONFIG: APPLICATION
const port = 3000

// CONFIG: EXPRESS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC FILES
// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// ROUTES: EXPRESS
app.get('/', (req, res) => {
  res.send('API is working correctly!')
})

app.post('/data', (req, res) => {
	console.log('API is working correctly');
	res.send('API is working correctly')
})

// DATABASE: SQLite3




// SERVER

let timestamp = new Date().toLocaleTimeString()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} \n @${timestamp}`)
})