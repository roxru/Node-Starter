"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Employee extends sequelize_1.Model {
    static initModel(sequelize) {
        Employee.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                autoIncrement: false,
                field: 'EmpID',
            },
            firstName: {
                type: sequelize_1.DataTypes.STRING,
                field: 'EFirstName',
            },
            lastName: {
                type: sequelize_1.DataTypes.STRING,
                field: 'ELastName',
            },
            address: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Address',
            },
            age: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'Age',
            },
            dateJoin: {
                type: sequelize_1.DataTypes.DATE,
                field: 'D_Join',
            },
            department: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Dept',
            },
            salary: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'Salary',
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'Employees',
            timestamps: false,
        });
    }
}
exports.default = Employee;
