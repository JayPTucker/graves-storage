// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const { INTEGER } = require("sequelize");
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Item" model that matches up with DB
var Unit = sequelize.define("unit", {
  item_number: Sequelize.INTEGER
});

// Syncs with DB
Unit.sync();

// Makes the Item Model available for other files (will also create a table)
module.exports = Unit;
