"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const authentication_token_1 = require("../models/authentication_token");
class RestLogin extends rest_1.Rest {
    create(cred) {
        return this.conf.post(new authentication_token_1.AuthenticationToken(), '/login', cred);
    }
}
exports.RestLogin = RestLogin;
