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
const conversation_1 = require("../models/conversation");
const conversation_message_1 = require("../models/conversation_message");
class RestConversation extends rest_1.Rest {
    list(page, size = 20) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                page: page,
                size: size,
                messageSamples: 1,
            };
            return this.conf.getList(new conversation_1.Conversation(), "/conversation?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new conversation_1.Conversation(), "/conversation/" + id);
        });
    }
    create(conversation) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new conversation_1.Conversation(), "/conversation", conversation);
        });
    }
    update(id, conversation) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new conversation_1.Conversation(), "/conversation/" + id, conversation);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/conversation/" + id);
        });
    }
    consume(id, page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/conversation/{id}/message/consume", { id: id }) + rest_1.Rest.encodeQueryData({
                page: page,
                size: size,
            });
            return this.conf.getList(new conversation_message_1.ConversationMessage(), path);
        });
    }
    addPhoto(id, photo, message, tagEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new FormData();
            f.set("file", message);
            if (message !== undefined && message != "") {
                f.set("message", message);
            }
            if (tagEntities !== undefined) {
                f.set("tag_entities", tagEntities.toJson());
            }
            let path = rest_1.Rest.params("/conversation/{id}/message/photo", { id: id });
            return this.conf.postMultipart(new conversation_message_1.ConversationMessage(), path, f);
        });
    }
}
exports.RestConversation = RestConversation;
