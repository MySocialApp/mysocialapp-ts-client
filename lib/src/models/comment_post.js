"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommentPost {
    setMessage(message) {
        this.mMessage = message;
        return this;
    }
    setImage(file) {
        this.mFile = file;
        return this;
    }
    toJson() {
        return JSON.stringify({ message: this.mMessage });
    }
}
exports.CommentPost = CommentPost;
