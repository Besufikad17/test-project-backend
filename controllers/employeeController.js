const { default: mongoose } = require("mongoose");
const Employee = require("../models/employeeModel");
const employeeController = {};

require("dotenv").config();

employeeController.addEmployee = async(req, res) => {
  const { name, date_of_birth, gender, salary } = req.body;

  // simple validation
  if(!name || !date_of_birth || !gender || !salary){
      return res.json({msg: "Please enter all fields!!"});
  }

  // checking if there is an employee with the same name and date_of_birth
  Employee.findOne({
      name, date_of_birth
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
  }).catch(err => {
    throw err;
  })
}

employeeController.getEmployees = async(req, res) => {
  Employee.find({}).then(employees => {
    res.json(employees);
  }).catch(err => {
    throw err;
  })
}

employeeController.updateEmployee = async(req, res) => {
  const id = req.params.id;

  const { name, date_of_birth, gender, salary } = req.body;

  Employee.findOne({ _id: mongoose.Types.ObjectId(id) }).then(employee => {
     if(employee){
        employee.name = name;
        employee.date_of_birth = date_of_birth;
        employee.gender = gender;
        employee.salary = salary;
        employee.save();

        res.json(employee);
     }else{
        res.json({msg: "Employee doesn't exist!!"});
     }
  });
}

employeeController.deleteEmployee = async(req, res) => {
  const id = req.params.id;

  Employee.findByIdAndDelete({ _id: mongoose.Types.ObjectId(id) }).then(result => {
    res.json({masg: "Done!"})
  }).catch(err => {
    throw err;
  })
}

module.exports = employeeController;
