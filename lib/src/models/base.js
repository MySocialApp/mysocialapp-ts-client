"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const model_1 = require("./model");
const user_1 = require("./user");
const photo_1 = require("./photo");
class Base extends model_1.Model {
    set owner(o) {
        this._owner = new user_1.User(o);
    }
    get owner() {
        return this._owner;
    }
    set displayed_photo(o) {
        this._displayed_photo = new photo_1.Photo(o);
    }
    get displayed_photo() {
        return this._displayed_photo;
    }
    get createdDate() {
        return this.created_date ? moment(this.created_date) : null;
    }
}
exports.Base = Base;
