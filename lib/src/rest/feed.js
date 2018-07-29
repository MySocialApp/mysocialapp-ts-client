"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
class RestFeed extends rest_1.Rest {
    get(id) {
        return this.conf.get(new feed_1.Feed(), rest_1.Rest.params('/feed/{id}', { id: id }));
    }
    list(page, params) {
        params = params !== undefined ? params : {};
        params['page'] = page !== undefined ? page : 0;
        return this.conf.getList(new feed_1.Feed(), '/feed?' + rest_1.Rest.encodeQueryData(params));
    }
    delete(id) {
        return this.conf.delete(rest_1.Rest.params("/feed/{id}", { id: id }));
    }
    create(feedPost, userId) {
        return this.conf.post(new feed_1.Feed(), rest_1.Rest.params('/user/{userId}/wall/message', { userId: userId }), feedPost);
    }
}
exports.RestFeed = RestFeed;
