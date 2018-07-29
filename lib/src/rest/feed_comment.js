"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const comment_1 = require("../models/comment");
class RestFeedComment extends rest_1.Rest {
    add(id, comment) {
        return this.conf.post(new comment_1.Comment(), rest_1.Rest.params("feed/{id}/comment", { id: id }), comment);
    }
    list(id) {
        return this.conf.getList(new comment_1.Comment(), rest_1.Rest.params("feed/{id}/comment", { id: id }));
    }
}
exports.RestFeedComment = RestFeedComment;
