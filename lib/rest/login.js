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
const rest_1 = require("./rest");
const authentication_token_1 = require("../models/authentication_token");
const empty_1 = require("../models/empty");
class RestLogin extends rest_1.Rest {
    create(cred) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new authentication_token_1.AuthenticationToken(), '/login', cred);
        });
    }
    logAs(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new authentication_token_1.AuthenticationToken(), '/login/as/' + userId, new empty_1.Empty());
        });
    }
}
exports.RestLogin = RestLogin;
