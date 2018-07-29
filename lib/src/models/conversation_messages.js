"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const conversation_message_1 = require("../rest/conversation_message");
class ConversationMessages extends model_1.Model {
    list(page, size) {
        return (new conversation_message_1.RestConversationMessage(this.conf)).list(this.conversation_id, page, size);
    }
}
exports.ConversationMessages = ConversationMessages;
