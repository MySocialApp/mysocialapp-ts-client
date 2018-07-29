"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
class RestUserWallMessage extends rest_1.Rest {
    list(userId) {
        return this.conf.getList(new feed_1.Feed(), rest_1.Rest.params("/user/{userId}/wall/message", { userId: userId }));
    }
    post(userId, message) {
        return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("user/{userId}/wall/message", { userId: userId }), message);
    }
    put(userId, messageId, message) {
        return this.conf.put(new feed_1.Feed(), rest_1.Rest.params("user/{userId}/wall/message/{messageId}", {
            userId: userId,
            messageId: messageId
        }), message);
    }
    delete(userId, messageId) {
        return this.conf.delete(rest_1.Rest.params("user/{userId}/wall/message/{messageId}", {
            userId: userId,
            messageId: messageId
        }));
    }
}
exports.RestUserWallMessage = RestUserWallMessage;
