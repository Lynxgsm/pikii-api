const Service = require("../common/controllers/crud");
const { Category, Delivery,Product, Ewallet,Publicity } = require("../common/models");
module.exports = (Router) => {
  Router.route("/resto/category").get(Service.find(Category,"category"));
  Router.route("/resto/publicity").get(Service.find(Publicity));
  Router.route("/resto/deliveries")
    .get(Service.find(Delivery,"expeditionID"))//Filter per ExpetidonId
    .put(Service.update(Delivery));
  Router.route("/resto/dishes")
    .get(Service.find(Product,"userID"))//Filter per userid
    .post(Service.create(Product))
    .put(Service.update(Product))
    .delete(Service.delete(Product));
  Router.route("/resto/ewallet")
    .get(Service.find(Ewallet,"cashpointID"))//Filter per cashpoint id
    .post(Service.create(Ewallet))
    .put(Service.update(Ewallet));
  return Router;
};
