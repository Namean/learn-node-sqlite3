var sqlite3 = require('sqlite3').verbose();


databaseName = "./chinook.db"
var db = new sqlite3.Database(databaseName);

// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
// });

// db.close();
 



databaseQuery = "SELECT Name, Composer from tracks LIMIT 10;"





db.serialize(function() {
	  // db.run(databaseQuery);
	  db.each(`${databaseQuery}`, function(err, row) {
      console.log(row.Composer + ' : ' + row.Name);
  });
})

db.close();



