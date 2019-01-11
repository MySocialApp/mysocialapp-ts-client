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
const user_1 = require("./user");
const feed_1 = require("../rest/feed");
const text_wall_message_1 = require("./text_wall_message");
const convert_1 = require("./convert");
var ActionType;
(function (ActionType) {
    ActionType["Publish"] = "PUBLISH";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
class Feed extends model_1.Model {
    constructor() {
        super(...arguments);
        this.action = ActionType.Publish;
    }
    set id(v) {
    }
    get id() {
        return this.object ? this.object.id : null;
    }
    set target(o) {
        this._target = convert_1.convertModel(o, this.conf);
    }
    get target() {
        return this._target;
    }
    set object(o) {
        this._object = convert_1.convertModel(o, this.conf);
    }
    get object() {
        return this._object;
    }
    set actor(o) {
        this._actor = new user_1.User(o, this.conf);
    }
    get actor() {
        return this._actor;
    }
    get stats() {
        return this._stats;
    }
    get created_date() {
        return this.object.created_date;
    }
    set created_date(s) {
    }
    get createdDate() {
        return this.object ? this.object.getCreatedDate : null;
    }
    get bodyMessage() {
        return this.object.bodyMessage ? this.object.bodyMessage : '';
    }
    get bodyImageUrl() {
        return this.object.body_image_url;
    }
    get bodyImageText() {
        return this.object.body_image_text;
    }
    get payload() {
        return this.object.payload;
    }
    addLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.addLike();
        });
    }
    getLikes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.getLikes();
        });
    }
    deleteLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.deleteLike();
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.addComment(comment);
        });
    }
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.getComments();
        });
    }
    abuse() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_1.RestFeed(this.conf)).abuse(this.object.id);
        });
    }
    ignore() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_1.RestFeed(this.conf)).ignore(this.object.id);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_1.RestFeed(this.conf)).delete(this.object.id);
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let wm = new text_wall_message_1.TextWallMessage().setMessage(this.object.displayed_name).setVisibility(this.access_control).setPayload(this.object.payload);
            return (new feed_1.RestFeed(this.conf)).updateMessage(this.object.id, wm);
        });
    }
    setBodyMessage(message) {
        if (this.object && this.object.bodyMessage) {
            this.object.bodyMessage = message;
        }
        return this;
    }
    setAccessControl(ac) {
        if (this.object) {
            this.access_control = ac;
        }
        return this;
    }
    setPayload(payload) {
        this.object.setPayload(payload);
        return this;
    }
}
exports.Feed = Feed;
