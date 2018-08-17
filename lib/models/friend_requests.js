"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user_1 = require("./user");
class FriendRequests extends model_1.Model {
    set incoming(list) {
        let users;
        for (let u in list) {
            users.push(new user_1.User(u));
        }
        this._incoming = users;
    }
    get incoming() {
        return this._incoming;
    }
    set outgoing(list) {
        let users;
        for (let u in list) {
            users.push(new user_1.User(u));
        }
        this._outgoing = users;
    }
    get outgoing() {
        return this._outgoing;
    }
}
exports.FriendRequests = FriendRequests;
