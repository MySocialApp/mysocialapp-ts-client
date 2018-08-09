"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_1 = require("./photo");
const base_1 = require("./base");
const custom_field_1 = require("./custom_field");
const status_1 = require("./status");
const flag_1 = require("./flag");
const location_1 = require("./location");
class User extends base_1.Base {
    constructor() {
        super(...arguments);
        this._custom_fields = [];
    }
    set profile_photo(p) {
        this._profile_photo = new photo_1.Photo(p, this.conf);
    }
    get profile_photo() {
        return this._profile_photo;
    }
    set flag(p) {
        this._flag = new flag_1.Flag(p, this.conf);
    }
    get flag() {
        return this._flag;
    }
    set living_location(p) {
        this._living_location = new location_1.Location(p, this.conf);
    }
    get living_location() {
        return this._living_location;
    }
    set current_status(p) {
        this._current_status = new status_1.Status(p, this.conf);
    }
    get current_status() {
        return this._current_status;
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
