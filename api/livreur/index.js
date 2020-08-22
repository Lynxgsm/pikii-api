const Service = require("../common/controllers/crud");
const { Delivery } = require("../common/models");

module.exports = (Router) => {
  Router.get("/livreur/deliveries/:status", Service.find(Delivery, "deliveries"))
  Router.get("/livreur/spec_deliveries/:status", Service.find(Delivery, "livreur"))
  Router.get("/livreur/delivery/:id", Service.find(Delivery, "delivery"))
  Router.route("/livreur/deliveries/")
    .post(Service.create(Delivery))
    .put(Service.update(Delivery));
  return Router;
};
