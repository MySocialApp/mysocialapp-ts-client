"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class AppConfig extends model_1.Model {
    set owner(o) {
        this._owner = new AppConfigOwner(o, this.conf);
    }
    get owner() {
        return this._owner;
    }
}
exports.AppConfig = AppConfig;
class AppConfigOwner extends model_1.Model {
    set id(id) {
    }
    get id() {
        return this._id_str;
    }
    set id_str(id) {
        this._id_str = id;
    }
    get id_str() {
        return this._id_str;
    }
}
