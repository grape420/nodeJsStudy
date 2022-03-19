"use strict";

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
    console.log(req.body);
  }
};

module.exports = {
  output,
  process
};