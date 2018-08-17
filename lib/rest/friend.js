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
const user_1 = require("../models/user");
const friend_requests_1 = require("../models/friend_requests");
class RestFriend extends rest_1.Rest {
    list(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { page: page, size: size !== undefined ? size : size };
            return this.conf.getList(new user_1.User(), "/friend?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    listRequests() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new friend_requests_1.FriendRequests(), "/friend/request");
        });
    }
}
exports.RestFriend = RestFriend;
