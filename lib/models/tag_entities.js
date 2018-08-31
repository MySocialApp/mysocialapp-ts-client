"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user_mention_tag_1 = require("./user_mention_tag");
const url_tag_1 = require("./url_tag");
const hash_tag_1 = require("./hash_tag");
const utils_1 = require("./utils");
class TagEntities extends model_1.Model {
    getJsonParameters() {
        return {
            user_mention_tags: utils_1.listToParameters(this.user_mention_tags),
            url_tags: utils_1.listToParameters(this.url_tags),
            hash_tags: utils_1.listToParameters(this.hash_tags)
        };
    }
    get user_mention_tags() {
        return this._user_mention_tags;
    }
    set user_mention_tags(list) {
        let listObj = [];
        for (let u of list) {
            listObj.push(new user_mention_tag_1.UserMentionTag(u));
        }
        this._user_mention_tags = listObj;
    }
    get url_tags() {
        return this._url_tags;
    }
    set url_tags(list) {
        let listObj = [];
        for (let u of list) {
            listObj.push(new url_tag_1.URLTag(u));
        }
        this._url_tags = listObj;
    }
    get hash_tags() {
        return this._hash_tags;
    }
    set hash_tags(list) {
        let listObj = [];
        for (let u of list) {
            listObj.push(new hash_tag_1.HashTag(u));
        }
        this._hash_tags = listObj;
    }
}
exports.TagEntities = TagEntities;
