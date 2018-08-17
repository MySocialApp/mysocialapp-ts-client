"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_1 = require("./photo");
const custom_field_1 = require("./custom_field");
const status_1 = require("./status");
const location_1 = require("./location");
const flag_1 = require("./flag");
const model_1 = require("./model");
class User extends model_1.Model {
    constructor() {
        super(...arguments);
        this._custom_fields = [];
    }
    getJsonParameters() {
        return {
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            password: this.password,
            email: this.email,
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            presentation: this.presentation,
        };
    }
    get id() {
        return this.id_str;
    }
    set id(id) {
        // int64 cannot be interpreted by browsers
    }
    set displayed_photo(o) {
        this._displayed_photo = new photo_1.Photo(o);
    }
    get displayed_photo() {
        return this._displayed_photo;
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
        this._living_location = new location_1.Location(p);
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
