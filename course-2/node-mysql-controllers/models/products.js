const database = require("../utils/database");

module.exports = class Products {
  static fetchData() {
    return database.execute("select * from products");
  }
};
