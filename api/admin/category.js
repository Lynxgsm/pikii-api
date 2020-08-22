const { Category } = require("../common/models");
const Service = require("../common/controllers/crud");

module.exports = {
  create(req, res) {
    Service.create(Category)(req, res);
  },
  find(req, res) {
    Service.find(Category)(req, res);
  },
  update(req, res) {
    Service.update(Category)(req, res);
  },
  delete(req, res) {
    Service.delete(Category)(req, res);
  },
};
