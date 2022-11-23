const Employee = require("../models/employeeModel");
const employeeController = {};

require("dotenv").config();

employeeController.addEmployee = async(req, res) => {
  const { name, date_of_birth, gender, salary } = req.body;

  // simple validation
  if(name || date_of_birth || gender || salary){
      return res.json({msg: "Please enter all fields!!"});
  }

  Employee.findOne({
    where: {
      name, date_of_birth
    }
  }).then(employee => {
    if(employee){
      res.json({msg: "Employee already exists!!"});
    }else{
      const newEmployee = new Employee({
        name,
        date_of_birth,
        gender,
        salary
      })

      newEmployee.save();
      res.json(newEmployee);
    }
  })

  

}

module.exports = employeeController;
