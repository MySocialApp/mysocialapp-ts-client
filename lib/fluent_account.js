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
const fluent_abstract_1 = require("./fluent_abstract");
const login_credentials_1 = require("./models/login_credentials");
const account_events_1 = require("./models/account_events");
const reset_identifier_1 = require("./models/reset_identifier");
class FluentAccount extends fluent_abstract_1.FluentAbstract {
    get(useCache) {
        return __awaiter(this, void 0, void 0, function* () {
            if (useCache && this._account !== undefined) {
                return this._account;
            }
            const resp = yield this.session.clientService.account.get();
            this._account = resp;
            return resp;
        });
    }
    getAvailableCustomFields() {
        return __awaiter(this, void 0, void 0, function* () {
            const acc = yield this.get();
            return acc.custom_fields;
        });
    }
    changeProfilePhoto(photo) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.account.updateProfilePhoto(photo);
        });
    }
    changeProfileCoverPhoto(photo) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.account.updateCover(photo);
        });
    }
    requestForDeleteAccount(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.account.delete(new login_credentials_1.LoginCredentials({ password: password }));
        });
    }
    getEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.configuration.get(new account_events_1.AccountEvents(), "/account/event");
        });
    }
    resetPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.configuration.postVoid("/reset", new reset_identifier_1.ResetIdentifier({ email: email }));
        });
    }
}
exports.FluentAccount = FluentAccount;
