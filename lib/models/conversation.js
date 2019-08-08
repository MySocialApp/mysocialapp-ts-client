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
const conversation_1 = require("../rest/conversation");
const utils_1 = require("./utils");
class Conversation extends base_1.Base {
    getJsonParameters() {
        return {
            members: utils_1.listToParameters(this.members),
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
        var m = this._messages == null ? (this._messages = new conversation_messages_1.ConversationMessages(null, this.conf)) : this._messages;
        m.conversation_id = this.id_str;
        return m;
    }
    set messages(o) {
        this._messages = new conversation_messages_1.ConversationMessages(o, this.conf);
        this._messages.conversation_id = this.id_str;
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
    kickMember(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.members.length; i++) {
                if (this.members[i].id == userId) {
                    this.members.splice(i, 1);
                    break;
                }
            }
            return this.update();
        });
    }
    leave() {
        return __awaiter(this, void 0, void 0, function* () {
            return new conversation_1.RestConversation(this.conf).delete(this.id);
        });
    }
    makeSilent(silent) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new conversation_1.RestConversation(this.conf)).silent(this.id, silent).then(() => {
                this.silent = silent;
                return this;
            });
        });
    }
}
exports.Conversation = Conversation;
