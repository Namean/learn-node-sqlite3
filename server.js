const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const bodyParser = require("body-parser");
const cors = require('cors');
// CONFIG


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);


// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));





// database
var sqlite3 = require('sqlite3').verbose();
databaseName = "./chinook.db"
var db = new sqlite3.Database(databaseName);
databaseQuery = "SELECT Name, Composer from tracks LIMIT 10;"



// ROUTES
// app.get('/', (req, res) => {
//   res.send('API is working correctly!')
// })


app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.post('/', function (req, res) {
  res.send('Got a POST request')
})





// app.get('/sqlite3', function (req, res) {
// 	db.serialize(function() {
// 	  // db.run(databaseQuery);
// 	  db.each(`${databaseQuery}`, function(err, row) {
//       console.log(row.Composer + ' : ' + row.Name);
      
//       res.send(row);
//   });
// });




app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})