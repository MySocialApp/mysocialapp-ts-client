"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const rest_1 = require("./rest");
class RestRegister extends rest_1.Rest {
    create(user) {
        return this.conf.post(new user_1.User(), "/register", user);
    }
}
exports.RestRegister = RestRegister;
