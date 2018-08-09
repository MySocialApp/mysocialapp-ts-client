"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class LoginCredentials extends model_1.Model {
    toJson() {
        return JSON.stringify({ username: this.username, password: this.password });
    }
}
exports.LoginCredentials = LoginCredentials;
