"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const user_1 = require("../models/user");
class RestAccount extends rest_1.Rest {
    get() {
        return this.conf.get(new user_1.User(), '/account');
    }
}
exports.RestAccount = RestAccount;
