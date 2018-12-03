"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const access_control_1 = require("./access_control");
const text_wall_message_1 = require("./text_wall_message");
class FeedPost {
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    getJsonParameters() {
        let j = {
            message: this._message,
            access_control: this._visibility !== undefined ? this._visibility : access_control_1.AccessControl.Friend,
        };
        if (this.payload) {
            j['payload'] = this.payload;
        }
        return j;
    }
    setMessage(message) {
        this._message = message;
        return this;
    }
    setImage(image) {
        this._image = image;
        return this;
    }
    setTagEntities(t) {
        this._tag_entities = t;
    }
    setVisibility(visible) {
        this._visibility = visible;
        return this;
    }
    setPayload(payload) {
        this.payload = payload;
        return this;
    }
    hasPhoto() {
        return this._image !== undefined;
    }
    get textWallMessage() {
        return new text_wall_message_1.TextWallMessage({}).setVisibility(this._visibility).setMessage(this._message).setTagEntities(this._tag_entities).setPayload(this.payload);
    }
}
exports.FeedPost = FeedPost;
