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
    allowNull: false,
    unique: {
      msg: "Name already taken",
    },
    validate: {
      notEmpty: true,
      notNull: {
        msg: "Product name is required",
      },
      len: {
        args: [3, 20],
        msg: "product name but be between 3 to 20 characters",
      },
    },
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 1,
      max: 10000000,
    },
  },
  category: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: "Please provide the category",
      },
      len: [10, 20],
    },
  },
});

module.exports = Products;
