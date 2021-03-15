var sqlite3 = require('sqlite3').verbose();


databaseName = "./chinook.db"
var db = new sqlite3.Database(databaseName);

databaseQuery = "SELECT Name, Composer from tracks LIMIT 10;"





db.serialize(function() {
	  // db.run(databaseQuery);
	  db.each(`${databaseQuery}`, function(err, row) {
      console.log(row.Composer + ' : ' + row.Name);
  });
})

db.close();