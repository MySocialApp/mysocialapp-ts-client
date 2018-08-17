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
class FluentUser extends fluent_abstract_1.FluentAbstract {
    list(page, size = 10, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.user.list(page, undefined, size, undefined, params);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.user.get(id);
        });
    }
    getByExternalId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.userExternal.get(id);
        });
    }
    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<User[]>}
     */
    search(search, page, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.user.list(page, undefined, size);
        });
    }
}
exports.FluentUser = FluentUser;
