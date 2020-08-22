const { Delivery } = require("../common/models");
const Service = require("../common/controllers/crud");

module.exports = {
  create(req, res) {
    Service.create(Delivery)(req, res);
  },
  find(req, res) {
    Service.find(Delivery)(req, res);
  },
  update(req, res) {
    Service.update(Delivery)(req, res);
  },
  delete(req, res) {
    Service.delete(Delivery)(req, res);
  },
};
