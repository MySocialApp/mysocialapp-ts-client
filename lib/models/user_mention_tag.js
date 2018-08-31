"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entity_abstract_1 = require("./tag_entity_abstract");
const user_1 = require("./user");
const feed_1 = require("./feed");
class UserMentionTag extends tag_entity_abstract_1.TagEntityAbstract {
    get text() {
        return this.mentioned_user ? this.mentioned_user.displayed_name : "";
    }
    get text_shown() {
        // TODO
        return "";
    }
    get indices() {
        return [this.start_index, this.end_index];
    }
    set indices(indices) {
        if (!indices) {
            return;
        }
        if (indices.length == 2) {
            this.start_index = indices[0];
            this.end_index = indices[1];
            return;
        }
    }
    get mentioned_user() {
        return this._mentioned_user;
    }
    set mentioned_user(u) {
        this._mentioned_user = new user_1.User(u);
    }
    get target() {
        return this._target;
    }
    set target(u) {
        this._target = new feed_1.Feed(u);
    }
}
exports.UserMentionTag = UserMentionTag;
