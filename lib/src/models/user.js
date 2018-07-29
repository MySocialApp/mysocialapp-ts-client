"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const custom_field_1 = require("./custom_field");
const user_settings_1 = require("./user_settings");
class User extends base_1.Base {
    constructor() {
        super(...arguments);
        this._custom_fields = [];
    }
    set profile_photo(p) {
        this._profile_photo = p;
    }
    get profile_photo() {
        return this._profile_photo;
    }
    set user_settings(u) {
        this._user_settings = new user_settings_1.UserSettings(u, this.conf);
    }
    get user_settings() {
        return this._user_settings;
    }
    set custom_fields(list) {
        this._custom_fields = [];
        for (let c of list) {
            this._custom_fields.push(new custom_field_1.CustomField(c, this.conf));
        }
    }
    get custom_fields() {
        return this._custom_fields;
    }
}
exports.User = User;
var Gender;
(function (Gender) {
    Gender["Male"] = "MALE";
    Gender["Female"] = "FEMALE";
})(Gender = exports.Gender || (exports.Gender = {}));
