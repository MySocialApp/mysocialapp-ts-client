"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = require("./comment");
const model_1 = require("./model");
class CommentBlob extends model_1.Model {
    get samples() {
        return this._samples;
    }
    set samples(comments) {
        let list = [];
        for (let comment in comments) {
            list.push(new comment_1.Comment(comment, this.conf));
        }
        this._samples = list;
    }
}
exports.CommentBlob = CommentBlob;
