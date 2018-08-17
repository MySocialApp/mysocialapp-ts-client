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
const model_1 = require("./model");
const conversation_message_1 = require("./conversation_message");
const conversation_message_2 = require("../rest/conversation_message");
class ConversationMessages extends model_1.Model {
    set samples(messages) {
        let list = [];
        for (let m of messages) {
            list.push(new conversation_message_1.ConversationMessage(m, this.conf));
        }
        this._samples = list;
    }
    get samples() {
        return this._samples;
    }
    list(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new conversation_message_2.RestConversationMessage(this.conf)).list(this.conversation_id, page, size);
        });
    }
}
exports.ConversationMessages = ConversationMessages;
