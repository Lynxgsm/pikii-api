const Service = require("../common/controllers/crud");
const { Category, Delivery, Product, Ewallet } = require("../common/models");

module.exports = (Router) => {
  Router.route("/marchand/category").get(Service.find(Category,"category"));
  Router.route("/marchand/deliveries")
    .get(Service.find(Delivery,"expeditionID"))
    .put(Service.update(Delivery));
  Router.route("/marchand/products")
    .get(Service.find(Product,"userID"))
    .post(Service.create(Product))
    .put(Service.update(Product))
    .delete(Service.delete(Product));
  Router.route("/marchand/ewallet")
    .get(Service.find(Ewallet,"cashpointID"))
    .post(Service.create(Ewallet))
    .put(Service.update(Ewallet));
  return Router;
};
