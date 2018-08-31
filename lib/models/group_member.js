"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const group_1 = require("./group");
const model_1 = require("./model");
const user_1 = require("./user");
class GroupMember extends model_1.Model {
    get group() {
        return this._group;
    }
    set group(g) {
        this._group = new group_1.Group(g, this.conf);
    }
    get user() {
        return this._user;
    }
    set user(g) {
        this._user = new user_1.User(g, this.conf);
    }
}
exports.GroupMember = GroupMember;
