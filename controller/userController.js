const userData = require("../data/userData");

class UserController {
  async index(req, res) {
    return res.json(userData);
  }
}

module.exports = new UserController();