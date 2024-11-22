const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Products = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
});

module.exports = Products;
