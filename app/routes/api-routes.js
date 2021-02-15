var Unit = require("../models/unit.js");

module.exports = function(app) {
    // Get all items
    app.get("/api/all", function(req, res) {
      Unit.findAll({}).then(function(results) {
        res.json(results);
      });
    });
}