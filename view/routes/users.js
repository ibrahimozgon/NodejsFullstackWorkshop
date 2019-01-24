var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  var sql = require("mssql");

  // config for your database
  var config = {
    user: "arb_web",
    password: "C10FCD35-7A91-4BB2-B5D4-D5E658800C7D",
    server: "10.60.10.48",
    database: "ikinciel"
  };

  // connect to your database
  sql.connect(
    config,
    function(err) {
      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();

      // query to the database and get the records
      request.query("select TOP 10 * from Advert.Advert", function(err, data) {
        if (err) console.log(err);

        // send records as a response
        res.send(data);
        sql.close();
        // res.send({ adverts: data.recordsets });
      });
    }
  );
});

module.exports = router;
