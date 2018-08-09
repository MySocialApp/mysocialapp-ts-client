"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const comment_1 = require("../models/comment");
class RestFeedComment extends rest_1.Rest {
    create(id, comment) {
        return this.conf.post(new comment_1.Comment(), rest_1.Rest.params("feed/{id}/comment", { id: id }), comment);
    }
    list(id) {
        return this.conf.getList(new comment_1.Comment(), rest_1.Rest.params("feed/{id}/comment", { id: id }));
    }
    addPhoto(id, photo, message, tagEntities) {
        let f = new FormData();
        f.set("file", File);
        if (message !== undefined) {
            f.set("name", message);
        }
        if (tagEntities !== undefined) {
            f.set("tag_entities", tagEntities.toJson());
        }
        return this.conf.postMultipart(new comment_1.Comment(), rest_1.Rest.params("/feed/{id}/comment/photo", { id: id }), f);
    }
}
exports.RestFeedComment = RestFeedComment;
