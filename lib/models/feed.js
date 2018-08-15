"use strict";
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
    get body_message() {
        return this.object.body_message ? this.object.body_message : '';
    }
    addLike() {
        return this.object.addLike();
    }
    getLikes() {
        return this.object.getLikes();
    }
    deleteLike() {
        return this.object.deleteLike();
    }
    addComment(comment) {
        return this.object.addComment(comment);
    }
    getComments() {
        return this.object.getComments();
    }
    abuse() {
        return (new feed_1.RestFeed(this.conf)).abuse(this.object.id);
    }
    ignore() {
        return (new feed_1.RestFeed(this.conf)).ignore(this.object.id);
    }
    delete() {
        return (new feed_1.RestFeed(this.conf)).delete(this.object.id);
    }
}
exports.Feed = Feed;
