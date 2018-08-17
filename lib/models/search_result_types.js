"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const feed_1 = require("./feed");
const group_1 = require("./group");
const event_1 = require("./event");
const model_1 = require("./model");
class SearchResultTypes extends model_1.Model {
    set users(o) {
        this._users = new UserSearchResult(o);
    }
    get users() {
        return this._users;
    }
    set feeds(o) {
        this._feeds = new FeedsSearchResult(o);
    }
    get feeds() {
        return this._feeds;
    }
    set groups(o) {
        this._groups = new GroupSearchResult(o);
    }
    get groups() {
        return this._groups;
    }
    set events(o) {
        this._events = new EventSearchResult(o);
    }
    get events() {
        return this._events;
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
            list.push(new user_1.User(user));
        }
        this._data = list;
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
            list.push(new feed_1.Feed(feed));
        }
        this._data = list;
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
            list.push(new group_1.Group(group));
        }
        this._data = list;
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
            list.push(new event_1.Event(event));
        }
        this._data = list;
    }
}
exports.EventSearchResult = EventSearchResult;
