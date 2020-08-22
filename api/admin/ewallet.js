const { Ewallet } = require("../common/models");
const Service = require("../common/controllers/crud");

module.exports = {
  create(req, res) {
    Service.create(Ewallet)(req, res);
  },
  find(req, res) {
    Service.find(Ewallet)(req, res);
  },
  update(req, res) {
    Service.update(Ewallet)(req, res);
  },
  delete(req, res) {
    Service.delete(Ewallet)(req, res);
  },
};
