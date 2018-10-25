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
const photo_1 = require("./photo");
const base_1 = require("./base");
const tag_entities_1 = require("./tag_entities");
const feed_comment_1 = require("../rest/feed_comment");
const comment_post_1 = require("./comment_post");
class Comment extends base_1.Base {
    set photo(o) {
        this._photo = new photo_1.Photo(o, this.conf);
    }
    get photo() {
        return this._photo;
    }
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            return new feed_comment_1.RestFeedComment(this.conf).update(this.parent.id, this.id, new comment_post_1.CommentPost().setMessage(this.message));
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return new feed_comment_1.RestFeedComment(this.conf).delete(this.parent.id, this.id);
        });
    }
}
exports.Comment = Comment;
