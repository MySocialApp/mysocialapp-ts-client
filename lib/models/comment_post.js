"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommentPost {
    setMessage(message) {
        this._message = message;
        return this;
    }
    setImage(file) {
        this._file = file;
        return this;
    }
    setTagEntities(tagEntities) {
        this._tag_entities = tagEntities;
        return this;
    }
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    getJsonParameters() {
        return { message: this._message };
    }
    hasPhoto() {
        return this._file !== undefined;
    }
}
exports.CommentPost = CommentPost;
