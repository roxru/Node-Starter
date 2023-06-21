"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class QueryHandling extends sequelize_1.Model {
    static initModel(sequelize) {
        QueryHandling.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                autoIncrement: false,
                field: 'QID',
            },
            subDate: {
                type: sequelize_1.DataTypes.DATE,
                field: 'Sub_Date',
            },
            customerID: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Cust_ID',
            },
            employeeID: {
                type: sequelize_1.DataTypes.STRING,
                field: 'EmpID',
            },
            restDate: {
                type: sequelize_1.DataTypes.DATE,
                field: 'Res_Date',
            },
            status: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Status',
            },
            feedback: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'Feedback',
            },
            queryText: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Query_Text',
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'QueryHandling',
            timestamps: false,
        });
    }
}
exports.default = QueryHandling;
