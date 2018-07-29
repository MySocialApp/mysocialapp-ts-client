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
class FluentAccount {
    constructor(session) {
        this.session = session;
    }
    get(useCache) {
        return __awaiter(this, void 0, void 0, function* () {
            if (useCache && this.account !== undefined) {
                return this.account;
            }
            const resp = yield this.session.clientService.account.get();
            this.account = resp;
            return resp;
        });
    }
    getAvailableCustomFields() {
        return __awaiter(this, void 0, void 0, function* () {
            const acc = yield this.get();
            return acc.custom_fields;
        });
    }
}
exports.FluentAccount = FluentAccount;
