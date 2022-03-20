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
};

module.exports = UserStorage;