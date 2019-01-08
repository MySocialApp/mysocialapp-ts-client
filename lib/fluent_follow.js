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
class FluentFollow extends fluent_abstract_1.FluentAbstract {
    listFollowers(page, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const acc = yield this.session.clientService.account.get();
            return this.session.clientService.userFollower.list(acc.id, page, size);
        });
    }
    listFollowings(page, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const acc = yield this.session.clientService.account.get();
            return this.session.clientService.userFollowing.list(acc.id, page, size);
        });
    }
}
exports.FluentFollow = FluentFollow;
