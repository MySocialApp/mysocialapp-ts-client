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
const user_1 = require("./user");
const user_settings_1 = require("./user_settings");
const account_1 = require("../rest/account");
const model_1 = require("./model");
class Account extends user_1.User {
    getJsonParameters() {
        return {
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            living_location: this.living_location ? this.living_location.getJsonParameters() : null,
            custom_fields: model_1.Model.listToParameters(this.custom_fields),
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            presentation: this.presentation,
        };
    }
    set user_settings(u) {
        this._user_settings = new user_settings_1.UserSettings(u, this.conf);
    }
    get user_settings() {
        return this._user_settings;
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new account_1.RestAccount(this.conf)).update(this);
        });
    }
}
exports.Account = Account;
