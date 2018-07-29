"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const access_control_1 = require("./access_control");
class FeedPost {
    setMessage(message) {
        this.mMessage = message;
        return this;
    }
    setImage(image) {
        this.mImage = image;
        return this;
    }
    setVisibility(visible) {
        this.mVisibility = visible;
        return this;
    }
    toJson() {
        return JSON.stringify({
            message: this.mMessage,
            visibility: this.mVisibility !== undefined ? this.mVisibility : access_control_1.AccessControl.Friend
        });
    }
}
exports.FeedPost = FeedPost;
