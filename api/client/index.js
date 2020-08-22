const Service = require("../common/controllers/crud");
const {
  Category,
  Delivery,
  Product,
  Ewallet,
  User,
  Publicity
} = require("../common/models");

module.exports = (Router) => {
  Router.route("/client/category/:type").get(
    Service.find(Category, "roleType"),
  );
  Router.route("/client/deliveries")
    .get(Service.find(Delivery, "clientID")) //Filter client ID
    .post(Service.create(Delivery))
    .put(Service.update(Delivery));
  Router.get(
    "/client/deliveries/:status",
    Service.find(Delivery, "deliveries"),
  );
  Router.route("/client/ewallet").get(Service.find(Ewallet, "clientEwallet"));
  Router.route("/client/users/:userRole").get(Service.find(User, "userRole"));
  Router.route("/client/products/:productUserID").get(Service.find(Product, "productUserID"));
  Router.route("/client/publicity").get(Service.find(Publicity));
  Router.route("/client/solde").get(Service.find(User, "solde"));
  return Router;
};
