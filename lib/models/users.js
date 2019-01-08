"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user_1 = require("./user");
class Users extends model_1.Model {
    getJsonParameters() {
        return {
            total: this.total
        };
    }
    set users(list) {
        this._users = [];
        for (let u of list) {
            this._users.push(new user_1.User(u, this.conf));
        }
    }
    get users() {
        return this._users;
    }
}
exports.Users = Users;
