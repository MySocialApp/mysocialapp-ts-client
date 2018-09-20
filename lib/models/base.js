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
const moment = require("moment");
const model_1 = require("./model");
const user_1 = require("./user");
const photo_1 = require("./photo");
class Base extends model_1.Model {
    constructor() {
        super(...arguments);
        this.body_image_url = null;
        this.body_image_text = null;
    }
    get id() {
        return this.id_str;
    }
    set id(id) {
        // int64 cannot be interpreted by browsers
    }
    get bodyMessage() {
        return this.displayed_name;
    }
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
    get getCreatedDate() {
        return this.created_date ? moment(this.created_date) : null;
    }
    // must be override
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                reject();
            }));
        });
    }
    // must be override
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                reject();
            }));
        });
    }
}
exports.Base = Base;
