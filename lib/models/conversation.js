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
const user_1 = require("./user");
const conversation_messages_1 = require("./conversation_messages");
const base_1 = require("./base");
const conversation_message_1 = require("../rest/conversation_message");
const model_1 = require("./model");
const conversation_1 = require("../rest/conversation");
class Conversation extends base_1.Base {
    getJsonParameters() {
        return {
            members: model_1.Model.listToParameters(this.members),
            name: this.name,
        };
    }
    get members() {
        return this._members;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    addMember(user) {
        if (this.members == undefined) {
            this.members = [];
        }
        this.members.push(user);
        return this;
    }
    addMembers(users) {
        for (let user of users) {
            this.addMember(user);
        }
        return this;
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
        return __awaiter(this, void 0, void 0, function* () {
            if (!message.isMultipart) {
                return (new conversation_message_1.RestConversationMessage(this.conf)).create(this.id, message.getConversationMessage());
            }
            return (new conversation_message_1.RestConversationMessage(this.conf)).postFile(this.id, message);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new conversation_1.RestConversation(this.conf)).update(this.id, this);
        });
    }
}
exports.Conversation = Conversation;
