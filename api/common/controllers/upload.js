var multer = require("multer");
var path = require("path");

module.exports = function upload(req, res) {
  if (!req.token) {
    return res.sendStatus(403);
  }
  var storage = multer.diskStorage({
    destination: path.join(__dirname, "../../../public"),
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  var upload = multer({
    storage,
    limits: {
      fileSize: 5000000,
    },
    fileFilter: (req, file, cb) => {
      ImageType = /png|jpeg|jpg/;
      var ext = path.extname(file.originalname);
      if (!ImageType.test(ext)) {
        return cb({ error: "Type d'image non reconnue" });
      }
      cb(null, true);
    },
  }).single("file");

  upload(req, res, (err) => {
    if (err) {
      return res
        .status(500)
        .json({ error: err.message ? "Image trop grand" : err.error });
    }
    if (req.file == undefined) {
      return res.status(400).json({ error: "Aucun image selectionné!" });
    }
    return res.send(
      `${req.protocol}://${req.get("host")}/${req.file.filename}`
    );
  });
};
