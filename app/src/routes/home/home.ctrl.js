"use strict";



const output = {
   hello : (req, res) => {
    res.render("home/index");       // views에서 ./views로 설정해두었기 때문에 바로 home부터 시작
  },
   login : (req, res) => {
    res.render("home/login");
  }
};

const users = {
  id : ["grape420", "hello", "world"],
  pwd : ["kgty12", "1234", "1234"]
};

const process = {
  login : (req, res) => {
    const id = req.body.id,
      pwd = req.body.pwd;

      if (users.id.includes(id)) {
        const idx = users.id.indexOf(id);
        if (users.pwd[idx] === pwd) {
          return res.json({
            success : true
          });
        }
      }

      return res.json({
        success : false,
        msg : "로그인에 실패하셨습니다."
      });
  }
};

module.exports = {
  output,
  process
};