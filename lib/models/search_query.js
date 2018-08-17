"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class SearchQuery {
    get user() {
        return this._user;
    }
    set user(u) {
        this._user = new user_1.User(u);
    }
}
exports.SearchQuery = SearchQuery;
