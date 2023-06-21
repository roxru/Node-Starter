import { Model, Sequelize, DataTypes } from 'sequelize'
import { EmployeeAttributes } from '../attributes'

class Employee extends Model implements EmployeeAttributes {
    public id!: string
    public firstName!: string
    public lastName!: string
    public address!: string
    public age!: number
    public dateJoin!: Date
    public department!: string
    public salary!: number

    static initModel(sequelize: Sequelize): void {
        Employee.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: false,
                    field: 'EmpID',
                },
                firstName: {
                    type: DataTypes.STRING,
                    field: 'EFirstName',
                },
                lastName: {
                    type: DataTypes.STRING,
                    field: 'ELastName',
                },
                address: {
                    type: DataTypes.STRING,
                    field: 'Address',
                },
                age: {
                    type: DataTypes.INTEGER,
                    field: 'Age',
                },
                dateJoin: {
                    type: DataTypes.DATE,
                    field: 'D_Join',
                },
                department: {
                    type: DataTypes.STRING,
                    field: 'Dept',
                },
                salary: {
                    type: DataTypes.INTEGER,
                    field: 'Salary',
                },
            },
            {
                sequelize,
                underscored: true,
                tableName: 'Employees',
                timestamps: false,
            }
        )
    }
}
export default Employee
