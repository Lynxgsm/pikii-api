module.exports = {
  find(model, key) {
    return function (req, res) {
      const { id, role } = req.token;

      if (!req.token) {
        return res.sendStatus(403);
      }

      const filter = {
        userID: { userID: id }, //Products Resto | Marchand | Supermarché
        category: { role: role }, //Category Resto | Marchand | Supermarché
        clientID: { "client._id": id }, //Client Deliveries
        expeditionID: { expeditionId: id }, //Expedition Resto | Marchand | Supermarché
        cashpointID: { "cashpoint._id": id }, //Ewallet Resto | Marchand | Supermarché
        clientEwallet: { "client._id": id }, //Client ewallet
        userRole: { role: req.params.userRole }, //filter per user role
        productUserID: { userID: req.params.productUserID }, //Filter product per user ID
        roleType: { role: +req.params.type }, //Client catagory list []
        solde: { _id: id }, //Client ewallet
        livreur: {
          delivery_status: +req.params.status,
          deliverer: req.token.id,
        }, //livreur
        deliveries: { delivery_status: +req.params.status },
        delivery: { _id: req.params.id },
      };

console.log(filter[key])
      model.find(filter[key] || {}, (err, data) => {
        if (err) {
          return res.status(500).json({ error: "Erreur de serveur" });
        }
        if (key == "solde") {
          return res.json({ solde: data[0].solde });
        }
        return res.json(data);
      });
    };
  },
  create(model) {
    return function (req, res) {
      if (!req.token) {
        return res.sendStatus(403);
      }
      let data = new model(req.body);
      data.validate((err) => {
        if (err) {
          return res.status(400).json(module.exports.isValid(err.errors));
        }
        data.save((err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ error: "Erreur inconnue,Veuillez réessayer" });
          }
          return res.status(200).json(data);
        });
      });
    };
  },
  update(model) {
    return function (req, res) {
      if (!req.token) {
        return res.sendStatus(403);
      }
      model.updateOne(
        { _id: req.body._id },
        { $set: req.body },
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ error: "Erreur inconnue,Veuillez réessayer" });
          }
          return res.json({ message: "Mise à jour avec success!" });
        },
      );
    };
  },
  delete(model) {
    return function (req, res) {
      if (!req.token) {
        return res.sendStatus(403);
      }
      model.deleteOne(req.body, (err) => {
        if (err) {
          return res.status(500).json({ error: "Erreur de supression!" });
        }
        return res.json({ message: "Suppression avec success" });
      });
    };
  },
  isValid(obj) {
    const tmp = Object.keys(obj);
    return { error: obj[tmp[0]].message };
  },
};
