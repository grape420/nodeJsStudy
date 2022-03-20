"use strict";

const User = require("../../models/User");

const output = {
   hello : (req, res) => {
    res.render("home/index");       // views에서 ./views로 설정해두었기 때문에 바로 home부터 시작
  },
   login : (req, res) => {
    res.render("home/login");
  }
};

const process = {
  login : (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  }
};

module.exports = {
  output,
  process
};