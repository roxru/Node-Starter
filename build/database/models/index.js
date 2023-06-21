"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const configuration_1 = __importDefault(require("../configuration"));
const employee_1 = __importDefault(require("./employee"));
const product_1 = __importDefault(require("./product"));
const queryHandling_1 = __importDefault(require("./queryHandling"));
const sequelize = configuration_1.default.getInstance();
employee_1.default.initModel(sequelize);
product_1.default.initModel(sequelize);
queryHandling_1.default.initModel(sequelize);
exports.db = {
    sequelize,
    Employee: employee_1.default,
    Product: product_1.default,
    QueryHandling: queryHandling_1.default,
};
