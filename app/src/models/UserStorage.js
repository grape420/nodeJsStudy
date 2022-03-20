"use strict";

class UserStorage {
  static #users = {
    id : ["grape420", "hello", "world"],
    pwd : ["kgty12", "1234", "1234"],
    name : ["김종현", "홍길동", "유관순"]
  };

  static getUsers(...fields)  {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);    // [id, pwd, name]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
};

module.exports = UserStorage;