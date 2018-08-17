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
const tag_entities_1 = require("./tag_entities");
const conversation_1 = require("./conversation");
class ConversationMessage extends model_1.Model {
    set id(id) {
    }
    get id() {
        return this.id_str;
    }
    getJsonParameters() {
        return {
            message: this.message,
            tag_entities: this.tag_entities,
        };
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
        return __awaiter(this, void 0, void 0, function* () {
            return this.conversation.sendMessage(conversationMessagePost);
        });
    }
}
exports.ConversationMessage = ConversationMessage;
