"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
const search_type_1 = require("../models/search_type");
class SearchGroup extends search_1.SearchBuilder {
    constructor() {
        super();
        this.params.set("type", search_type_1.SearchType.User);
    }
    setFullName(value) {
        this.params.set("q", value);
        return this;
    }
    setLocation(loc) {
        this.params.set("location", String(loc.latitude) + "," + String(loc.longitude));
        return this;
    }
    setOrder(order) {
        this.params.set('sort_order', order);
        return this;
    }
}
exports.SearchGroup = SearchGroup;
