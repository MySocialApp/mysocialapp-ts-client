"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_credentials_1 = require("./models/login_credentials");
const fluent_account_1 = require("./fluent_account");
const fluent_feed_1 = require("./fluent_feed");
class Session {
    constructor(clientService) {
        this.clientService = clientService;
    }
    connect(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    this.auth = yield this.clientService.login.post(new login_credentials_1.LoginCredentials({
                        username: username,
                        password: password
                    }));
                    this.clientService.configuration.setAuth(this.auth);
                    this.account.get().then(user => resolve(user));
                }
                catch (err) {
                    reject(err);
                }
            })));
        });
    }
    disconnect() {
        return this.clientService.logout.do();
    }
    get account() {
        return this._account !== undefined ? this._account : this._account = new fluent_account_1.FluentAccount(this);
    }
    get feed() {
        return this._feed !== undefined ? this._feed : this._feed = new fluent_feed_1.FluentFeed(this);
    }
}
exports.Session = Session;
