"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
    static initModel(sequelize) {
        Product.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                autoIncrement: false,
                field: 'ProdID',
            },
            prodName: {
                type: sequelize_1.DataTypes.STRING,
                field: 'ProdName',
            },
            baseCost: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'Base_Cost',
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'Product',
            timestamps: false,
        });
    }
}
exports.default = Product;
