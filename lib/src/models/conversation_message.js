"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const tag_entities_1 = require("./tag_entities");
const conversation_1 = require("./conversation");
class ConversationMessage extends model_1.Model {
    toJson() {
        // TODO complete serialization
        return JSON.stringify({});
    }
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
    get photo() {
        return this._photo;
    }
    set photo(p) {
        this._photo = p;
    }
    get conversation() {
        return this._conversation;
    }
    set conversation(c) {
        this._conversation = new conversation_1.Conversation(c, this.conf);
    }
    replyBack(conversationMessagePost) {
        return this.conversation.sendMessage(conversationMessagePost);
    }
}
exports.ConversationMessage = ConversationMessage;
