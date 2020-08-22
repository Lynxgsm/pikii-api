var User = require("./users");
var Product = require("./products");
var Ewallet = require("./ewallet");
var Category = require("./category");
var Publicity = require("./publicity");
var Deliveries = require("./deliveries");

module.exports = (Router) => {
  //category
  Router.route("/admin/category")
    .get(Category.find)
    .post(Category.create)
    .delete(Category.delete)
    .put(Category.update);

  //Deliveries
  Router.route("/admin/deliveries").get(Deliveries.find).put(Deliveries.update);

  //Ewallet
  Router.route("/admin/ewallet").get(Ewallet.find).put(Ewallet.update);

  //Products
  Router.route("/admin/products")
    .get(Product.find)
    .post(Product.create)
    .put(Product.update);

  //Publicity
  Router.route("/admin/publicity")
    .get(Publicity.find)
    .post(Publicity.create)
    .put(Publicity.update)
    .delete(Publicity.delete)

  //Users
  Router.route("/admin/users")
    .get(User.find)
    .post(User.create)
    .put(User.update)
    .delete(User.delete);
  return Router;
};
