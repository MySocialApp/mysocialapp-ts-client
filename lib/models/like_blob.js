"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const like_1 = require("./like");
const model_1 = require("./model");
const moment = require("moment");
class LikeBlob extends model_1.Model {
    get samples() {
        return this._samples;
    }
    set samples(likes) {
        this._samples = [];
        for (let l of likes) {
            this._samples.push(new like_1.Like(l, this.conf));
        }
    }
    get friendLikes() {
        if (this._friendLikes != null) {
            return this._friendLikes.map(t => [t[0], moment(t[1])]);
        }
    }
}
exports.LikeBlob = LikeBlob;
