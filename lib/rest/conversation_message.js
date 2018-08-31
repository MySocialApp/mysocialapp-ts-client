"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const conversation_message_1 = require("../models/conversation_message");
const generic_form_data_1 = require("../models/generic_form_data");
class RestConversationMessage extends rest_1.Rest {
    list(id, page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            size = size !== undefined ? size : 10;
            let path = rest_1.Rest.params("/conversation/{id}/message", { id: id });
            path = path + '?' + rest_1.Rest.encodeQueryData({ page: page, size: size });
            return this.conf.getList(new conversation_message_1.ConversationMessage(), path);
        });
    }
    create(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/conversation/{id}/message", { id: id });
            return this.conf.post(new conversation_message_1.ConversationMessage(), path, message);
        });
    }
    postFile(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let fd = new generic_form_data_1.GenericFormData();
            fd.set("file", message.image.blob, 'image/png', "image.png");
            fd.set("message", message.message);
            let path = rest_1.Rest.params("/conversation/{id}/message", { id: id });
            return this.conf.postMultipart(new conversation_message_1.ConversationMessage(), path, fd);
        });
    }
}
exports.RestConversationMessage = RestConversationMessage;
