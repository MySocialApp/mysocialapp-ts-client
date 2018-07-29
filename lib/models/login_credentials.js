"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class LoginCredentials extends model_1.Model {
    constructor() {
        super(...arguments);
        this.username = "";
        this.password = "";
    }
}
exports.LoginCredentials = LoginCredentials;
