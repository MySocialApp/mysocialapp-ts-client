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
class RestEventWall extends rest_1.Rest {
    list(eventId, page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/event/{id}/wall?", { id: eventId }) + rest_1.Rest.encodeQueryData({
                page: page,
                size: size !== undefined ? size : 20
            });
            return this.conf.getList(new feed_1.Feed(), path);
        });
    }
    createMessage(eventId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("/event/{id}/wall/message", { id: eventId }), message);
        });
    }
    updateMessage(eventId, messageId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/event/{id}/wall/message/{messageId}", { id: eventId, messageId: messageId });
            return this.conf.put(new feed_1.Feed(), path, message);
        });
    }
    deleteMessage(eventId, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/event/{id}/wall/message/{messageId}", { id: eventId, messageId: messageId });
            return this.conf.deleteVoid(path);
        });
    }
}
exports.RestEventWall = RestEventWall;
