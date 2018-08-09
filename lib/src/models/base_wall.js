"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const like_blob_1 = require("./like_blob");
const feed_1 = require("../rest/feed");
const feed_like_1 = require("../rest/feed_like");
const comment_blob_1 = require("./comment_blob");
const feed_comment_1 = require("../rest/feed_comment");
class BaseWall extends base_1.Base {
    get comments() {
        return this._comments;
    }
    set comments(c) {
        this._comments = new comment_blob_1.CommentBlob(c, this.conf);
    }
    set likes(likes) {
        this._likes = new like_blob_1.LikeBlob(likes, this.conf);
    }
    get likes() {
        return this._likes;
    }
    getLikes() {
        return (new feed_like_1.RestFeedLike(this.conf)).get(this.id_str);
    }
    getLikersTotal() {
        return this.likes ? this.likes.total : 0;
    }
    setLikersTotal(i) {
        this.likes.total = i;
    }
    isLiked() {
        return this.likes.hasLike === true;
    }
    addLike() {
        return (new feed_like_1.RestFeedLike(this.conf)).create(this.id_str);
    }
    deleteLike() {
        return (new feed_like_1.RestFeedLike(this.conf)).delete(this.id_str);
    }
    getComments() {
        return (new feed_comment_1.RestFeedComment(this.conf)).list(this.id_str);
    }
    addComment(comment) {
        return (new feed_comment_1.RestFeedComment(this.conf)).create(this.id_str, comment);
    }
    delete() {
        return (new feed_1.RestFeed(this.conf)).delete(this.id_str);
    }
    get commentsTotal() {
        return this.comments ? this.comments.total : 0;
    }
    get commentsSamples() {
        return this.comments ? this.comments.samples : null;
    }
}
exports.BaseWall = BaseWall;
