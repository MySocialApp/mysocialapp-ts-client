"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
const empty_1 = require("../models/empty");
class RestFeed extends rest_1.Rest {
    get(id) {
        return this.conf.get(new feed_1.Feed(), rest_1.Rest.params('/feed/{id}', { id: id }));
    }
    list(page = 0, size = 10, params = {}) {
        params['page'] = page;
        params['size'] = size;
        return this.conf.getList(new feed_1.Feed(), '/feed?' + rest_1.Rest.encodeQueryData(params));
    }
    delete(id) {
        return this.conf.delete(rest_1.Rest.params("/feed/{id}", { id: id }));
    }
    addMessage(message) {
        return this.conf.post(new feed_1.Feed(), "/feed/message", message);
    }
    updateMessage(messageId, message) {
        return this.conf.post(new feed_1.Feed(), "/feed/message/" + messageId, message);
    }
    abuse(id) {
        return this.conf.postVoid(new empty_1.Empty(), rest_1.Rest.params("/feed/{id}/abuse", { id: id }), new empty_1.Empty());
    }
    ignore(id) {
        return this.conf.postVoid(new empty_1.Empty(), rest_1.Rest.params("/feed/{id}/ignore", { id: id }), new empty_1.Empty());
    }
}
exports.RestFeed = RestFeed;
