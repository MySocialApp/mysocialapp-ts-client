"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = require("./comment");
const model_1 = require("./model");
const moment = require("moment");
class CommentBlob extends model_1.Model {
    get samples() {
        return this._samples;
    }
    set samples(comments) {
        let list = [];
        for (let comment of comments) {
            list.push(new comment_1.Comment(comment, this.conf));
        }
        this._samples = list;
    }
    get friendComments() {
        if (this._friendComments != null) {
            return this._friendComments.map(t => [t[0], moment(t[1])]);
        }
    }
}
exports.CommentBlob = CommentBlob;
