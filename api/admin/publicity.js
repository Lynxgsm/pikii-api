const { Publicity } = require("../common/models");
const Service = require("../common/controllers/crud");

module.exports = {
  create(req, res) {
    Service.create(Publicity)(req, res);
  },
  find(req, res) {
    Service.find(Publicity)(req, res);
  },
  update(req, res) {
    Service.update(Publicity)(req, res);
  },
  delete(req, res) {
    Service.delete(Publicity)(req, res);
  },
};
