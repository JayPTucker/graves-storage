// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const { INTEGER } = require("sequelize");
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Item" model that matches up with DB
var Unit = sequelize.define("unit", {
  unit_number: Sequelize.INTEGER,
  unit_status:{
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  unit_price: Sequelize.INTEGER,
  unit_owner: Sequelize.STRING,
  unit_owner_org: Sequelize.STRING,
  unit_next_payment: Sequelize.STRING,
  unit_last_payment: Sequelize.STRING
});

// Syncs with DB
Unit.sync();

// Makes the Item Model available for other files (will also create a table)
module.exports = Unit;
