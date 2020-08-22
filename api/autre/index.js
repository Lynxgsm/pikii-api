const Service = require("../common/controllers/crud");
const { Product } = require("../common/models");

module.exports = (Router) => {
  Router.route("/autre/products")
    .get(Service.find(Product, "userID"))
    .post(Service.create(Product))
    .put(Service.update(Product))
    .delete(Service.delete(Product));
  return Router;
};
