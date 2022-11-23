const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date_of_birth : {
        type: Date,
        required: true
    },
    gender : {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Employee", employeeSchema)

