import { Model, Sequelize, DataTypes } from 'sequelize'
import { ProductAttributes } from '../attributes'

class Product extends Model implements ProductAttributes {
    public id!: string
    public prodName!: string
    public baseCost!: number

    static initModel(sequelize: Sequelize): void {
        Product.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: false,
                    field: 'ProdID',
                },
                prodName: {
                    type: DataTypes.STRING,
                    field: 'ProdName',
                },
                baseCost: {
                    type: DataTypes.INTEGER,
                    field: 'Base_Cost',
                },
            },
            {
                sequelize,
                underscored: true,
                tableName: 'Product',
                timestamps: false,
            }
        )
    }
}
export default Product
