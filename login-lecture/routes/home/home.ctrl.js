"use strict";

const hello = (req, res) => {
  res.render("home/index");       // views에서 ./views로 설정해두었기 때문에 바로 home부터 시작
};

const login = (req, res) => {
  res.render("home/login");
};

module.exports = {
  hello,
  login
};