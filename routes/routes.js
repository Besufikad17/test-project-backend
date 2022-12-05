const employeeController = require("../controllers/employeeController");
const userController = require("../controllers/userController");
const route = require("express").Router();

route.post("/add", employeeController.addEmployee);

route.get("/employees", employeeController.getEmployees);

route.put("/employee/:id", employeeController.updateEmployee);

route.delete("/remove/:id", employeeController.deleteEmployee);

route.post("/signup", userController.signup);

route.post("/login", userController.login);

module.exports = route;