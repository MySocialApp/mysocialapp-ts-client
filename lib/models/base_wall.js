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
    getLikersTotal() {
        return this.likes ? this.likes.total : 0;
    }
    setLikersTotal(i) {
        this.likes.total = i;
    }
    isLiked() {
        return this.likes.hasLike === true;
    }
    getLikes() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_like_1.RestFeedLike(this.conf)).get(this.id_str);
        });
    }
    addLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_like_1.RestFeedLike(this.conf)).create(this.id_str);
        });
    }
    deleteLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_like_1.RestFeedLike(this.conf)).delete(this.id_str);
        });
    }
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_comment_1.RestFeedComment(this.conf)).list(this.id_str);
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_comment_1.RestFeedComment(this.conf)).create(this.id_str, comment);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_1.RestFeed(this.conf)).delete(this.id_str);
        });
    }
    get commentsTotal() {
        return this.comments ? this.comments.total : 0;
    }
    get commentsSamples() {
        return this.comments ? this.comments.samples : null;
    }
}
exports.BaseWall = BaseWall;
