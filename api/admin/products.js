const { Product } = require("../common/models");
const Service = require("../common/controllers/crud");

module.exports = {
  create(req, res) {
    Service.create(Product)(req, res);
  },
  find(req, res) {
    Service.find(Product)(req, res);
  },
  update(req, res) {
    Service.update(Product)(req, res);
  },
  delete(req, res) {
    Service.delete(Product)(req, res);
  },
};
