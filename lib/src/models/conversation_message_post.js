"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conversation_message_1 = require("./conversation_message");
class ConversationMessagePost {
    constructor() {
        this.mMessage = "";
        this.mImage = null;
    }
    setMessage(message) {
        this.mMessage = message;
        return this;
    }
    setImage(f) {
        this.mImage = f;
        return this;
    }
    get isMultipart() {
        return this.mImage !== null;
    }
    getConversationMessage() {
        let c = (new conversation_message_1.ConversationMessage());
        c.message = this.mMessage;
        return c;
    }
    get image() {
        return this.mImage;
    }
    get message() {
        return this.mMessage;
    }
}
exports.ConversationMessagePost = ConversationMessagePost;
