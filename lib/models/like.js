"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const model_1 = require("./model");
class Like extends model_1.Model {
    get id() {
        return this.id_str;
    }
    set id(id) {
        // int64 cannot be interpreted by browsers
    }
    set owner(o) {
        this._owner = new user_1.User(o);
    }
    get owner() {
        return this._owner;
    }
}
exports.Like = Like;
