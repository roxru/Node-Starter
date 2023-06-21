import { Model, Sequelize, DataTypes } from 'sequelize'
import { QueryHandlingAttributes } from '../attributes'

class QueryHandling extends Model implements QueryHandlingAttributes {
    public id!: string
    public subDate!: Date
    public customerID!: string
    public employeeID!: string
    public restDate!: Date
    public status!: string
    public feedback!: number
    public queryText!: string

    static initModel(sequelize: Sequelize): void {
        QueryHandling.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: false,
                    field: 'QID',
                },
                subDate: {
                    type: DataTypes.DATE,
                    field: 'Sub_Date',
                },
                customerID: {
                    type: DataTypes.STRING,
                    field: 'Cust_ID',
                },
                employeeID: {
                    type: DataTypes.STRING,
                    field: 'EmpID',
                },
                restDate: {
                    type: DataTypes.DATE,
                    field: 'Res_Date',
                },
                status: {
                    type: DataTypes.STRING,
                    field: 'Status',
                },
                feedback: {
                    type: DataTypes.INTEGER,
                    field: 'Feedback',
                },
                queryText: {
                    type: DataTypes.STRING,
                    field: 'Query_Text',
                },
            },
            {
                sequelize,
                underscored: true,
                tableName: 'QueryHandling',
                timestamps: false,
            }
        )
    }
}
export default QueryHandling
