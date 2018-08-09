"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const conversation_messages_1 = require("./conversation_messages");
const base_1 = require("./base");
const conversation_message_1 = require("../rest/conversation_message");
class Conversation extends base_1.Base {
    get members() {
        return this._members;
    }
    set members(members) {
        this._members = [];
        for (let m of members) {
            this._members.push(new user_1.User(m));
        }
    }
    get messages() {
        return this._messages;
    }
    set messages(o) {
        this._messages = new conversation_messages_1.ConversationMessages(o, this.conf);
    }
    sendMessage(message) {
        if (!message.isMultipart) {
            return (new conversation_message_1.RestConversationMessage(this.conf)).create(this.id, message.getConversationMessage());
        }
        return (new conversation_message_1.RestConversationMessage(this.conf)).postFile(this.id, message);
    }
}
exports.Conversation = Conversation;
