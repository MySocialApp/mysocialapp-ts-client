"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchBuilder {
    constructor() {
        this.params = new Map();
    }
    toQueryParams() {
        let values = {};
        for (let k of this.params.keys()) {
            values[k] = this.params.get(k);
        }
        return values;
    }
}
exports.SearchBuilder = SearchBuilder;
