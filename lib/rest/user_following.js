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
class RestUserFollowing extends rest_1.Rest {
    list(userId, page, size, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['size'] = size;
            let path = rest_1.Rest.params("/user/{userId}/following?", {userId: userId}) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new user_1.User(), path);
        });
    }
    create(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new user_1.User(), rest_1.Rest.params("/user/{userId}/following?", {userId: userId}), new empty_1.Empty());
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.deleteVoid(rest_1.Rest.params("/user/{userId}/following?", {userId: userId}));
        });
    }
}
exports.RestUserFollowing = RestUserFollowing;
