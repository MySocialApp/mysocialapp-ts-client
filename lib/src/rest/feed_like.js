"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
const empty_1 = require("../models/empty");
class RestFeedLike extends rest_1.Rest {
    get(id) {
        return this.conf.getList(new feed_1.Feed(), rest_1.Rest.params("feed/{id}/like", { id: id }));
    }
    addLike(id) {
        return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("feed/{id}/like", { id: id }), new empty_1.Empty());
    }
    deleteLike(id) {
        return this.conf.delete(rest_1.Rest.params("feed/{id}/like", { id: id }));
    }
}
exports.RestFeedLike = RestFeedLike;
