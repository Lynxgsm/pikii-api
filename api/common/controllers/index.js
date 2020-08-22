var upload = require("./upload");
var checkToken = require("./checkToken");
var profile = require("./profile");
var ewallet = require("./ewallet");
var user = require("./auth");

module.exports = (Router) => {
  Router.post("/common/upload", upload);
  Router.post("/common/checkToken", checkToken);
  Router.post("/common/ewallet", ewallet);
  Router.put("/common/profile", profile);
  Router.post("/register", user.register);
  Router.post("/login", user.login);
  Router.post("/exist", user.existUser);
  Router.get("/test/test", user.test);
  return Router;
};
