"use strice";       // ECMA 스크립트 준수

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/index");       // views에서 ./views로 설정해두었기 때문에 바로 home부터 시작
});

router.get("/login", (req, res) => {
  res.render("home/login");
});

module.exports = router;      // 외부에서 이 라우터를 사용할 수 있게 export