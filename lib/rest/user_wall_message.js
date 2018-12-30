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
const feed_1 = require("../models/feed");
class RestUserWallMessage extends rest_1.Rest {
    list(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new feed_1.Feed(), rest_1.Rest.params("/user/{userId}/wall/message", { userId: userId }));
        });
    }
    create(userId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("/user/{userId}/wall/message", { userId: userId }), message);
        });
    }
    update(userId, messageId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new feed_1.Feed(), rest_1.Rest.params("/user/{userId}/wall/message/{messageId}", {
                userId: userId,
                messageId: messageId
            }), message);
        });
    }
    delete(userId, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.deleteVoid(rest_1.Rest.params("/user/{userId}/wall/message/{messageId}", {
                userId: userId,
                messageId: messageId
            }));
        });
    }
}
exports.RestUserWallMessage = RestUserWallMessage;
