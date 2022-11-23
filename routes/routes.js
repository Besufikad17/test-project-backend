const employeeController = require("../controllers/employeeController");
const route = require("express").Router();

route.post("/add", employeeController.addEmployee);

// route.post("/employees", employeeController.login);

module.exports = route;