"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_1 = require("./photo");
const base_1 = require("./base");
const tag_entities_1 = require("./tag_entities");
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
}
exports.Comment = Comment;
