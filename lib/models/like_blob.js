"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const like_1 = require("./like");
const model_1 = require("./model");
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
}
exports.LikeBlob = LikeBlob;
