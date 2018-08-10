"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const access_control_1 = require("./access_control");
class FeedPost {
    setMessage(message) {
        this._message = message;
        return this;
    }
    setImage(image) {
        // TODO manage photo
        this._image = image;
        return this;
    }
    setVisibility(visible) {
        this._visibility = visible;
        return this;
    }
    toJson() {
        return JSON.stringify({
            message: this._message,
            access_control: this._visibility !== undefined ? this._visibility : access_control_1.AccessControl.Friend
        });
    }
}
exports.FeedPost = FeedPost;
