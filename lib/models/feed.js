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
const base_wall_1 = require("./base_wall");
const feed_1 = require("../rest/feed");
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
        this._target = new base_wall_1.BaseWall(o, this.conf);
    }
    get target() {
        return this._target;
    }
    set object(o) {
        this._object = new base_wall_1.BaseWall(o, this.conf);
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
}
exports.Feed = Feed;
