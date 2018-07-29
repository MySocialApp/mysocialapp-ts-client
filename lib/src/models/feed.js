"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user_1 = require("./user");
const base_wall_1 = require("./base_wall");
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
    get createdDate() {
        return this.object ? this.object.createdDate : null;
    }
    get bodyMessage() {
        return this.object.bodyMessage ? this.object.bodyMessage : '';
    }
}
exports.Feed = Feed;
