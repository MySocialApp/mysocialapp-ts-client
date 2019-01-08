"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {value: true});
const rest_1 = require("./rest");
const user_1 = require("../models/user");
const empty_1 = require("../models/empty");
class RestAdminUserEnable extends rest_1.Rest {
    enable(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new user_1.User(), `/admin/user/${userId}/enable`, new empty_1.Empty());
        });
    }
    disable(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(new user_1.User(), `/admin/user/${userId}/enable`);
        });
    }
}
exports.RestAdminUserEnable = RestAdminUserEnable;
