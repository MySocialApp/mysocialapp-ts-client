"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const conversation_message_1 = require("../models/conversation_message");
class RestConversationMessage extends rest_1.Rest {
    list(id, page, size) {
        size = size !== undefined ? size : 10;
        let path = rest_1.Rest.params("/conversation/{id}/message", { id: id });
        path = path + '?' + rest_1.Rest.encodeQueryData({ page: page, size: size });
        return this.conf.getList(new conversation_message_1.ConversationMessage(), path);
    }
    create(id, message) {
        let path = rest_1.Rest.params("/conversation/{id}/message", { id: id });
        return this.conf.post(new conversation_message_1.ConversationMessage(), path, message);
    }
    postFile(id, message) {
        let fd = new FormData();
        fd.set("file", message.image);
        fd.set("message", message.message);
        let path = rest_1.Rest.params("/conversation/{id}/message", { id: id });
        return this.conf.postMultipart(new conversation_message_1.ConversationMessage(), path, fd);
    }
}
exports.RestConversationMessage = RestConversationMessage;
