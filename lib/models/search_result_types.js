"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const feed_1 = require("./feed");
const group_1 = require("./group");
const event_1 = require("./event");
const model_1 = require("./model");
class SearchResultTypes extends model_1.Model {
    set USER(o) {
        this._users = new UserSearchResult(o, this.conf);
    }
    get USER() {
        return this._users;
    }
    get user() {
        return this.USER;
    }
    set FEED(o) {
        this._feeds = new FeedsSearchResult(o, this.conf);
    }
    get FEED() {
        return this._feeds;
    }
    get feed() {
        return this.FEED;
    }
    set GROUP(o) {
        this._groups = new GroupSearchResult(o, this.conf);
    }
    get GROUP() {
        return this._groups;
    }
    get group() {
        return this.GROUP;
    }
    set EVENT(o) {
        this._events = new EventSearchResult(o, this.conf);
    }
    get EVENT() {
        return this._events;
    }
    get event() {
        return this.EVENT;
    }
}
exports.SearchResultTypes = SearchResultTypes;
class UserSearchResult extends model_1.Model {
    set data(users) {
        if (!users) {
            return;
        }
        let list = [];
        for (let user of users) {
            list.push(new user_1.User(user, this.conf));
        }
        this._data = list;
    }
    get data() {
        return this._data;
    }
}
exports.UserSearchResult = UserSearchResult;
class FeedsSearchResult extends model_1.Model {
    set data(feeds) {
        if (!feeds) {
            return;
        }
        let list = [];
        for (let feed of feeds) {
            list.push(new feed_1.Feed(feed, this.conf));
        }
        this._data = list;
    }
    get data() {
        return this._data;
    }
}
exports.FeedsSearchResult = FeedsSearchResult;
class GroupSearchResult extends model_1.Model {
    set data(groups) {
        if (!groups) {
            return;
        }
        let list = [];
        for (let group of groups) {
            list.push(new group_1.Group(group, this.conf));
        }
        this._data = list;
    }
    get data() {
        return this._data;
    }
}
exports.GroupSearchResult = GroupSearchResult;
class EventSearchResult extends model_1.Model {
    set data(events) {
        if (!events) {
            return;
        }
        let list = [];
        for (let event of events) {
            list.push(new event_1.Event(event, this.conf));
        }
        this._data = list;
    }
    get data() {
        return this._data;
    }
}
exports.EventSearchResult = EventSearchResult;
