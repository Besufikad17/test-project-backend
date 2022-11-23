const employeeController = require("../controllers/employeeController");
const route = require("express").Router();

route.post("/add", employeeController.addEmployee);

route.get("/employees", employeeController.getEmployees);

route.put("/employee/:id", employeeController.updateEmployee);

route.delete("/remove/:id", employeeController.deleteEmployee);

module.exports = route;