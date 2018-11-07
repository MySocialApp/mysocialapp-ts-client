"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_result_types_1 = require("./search_result_types");
const model_1 = require("./model");
class SearchResults extends model_1.Model {
    set results_by_type(results) {
        this._results_by_type = new search_result_types_1.SearchResultTypes(results, this.conf);
    }
    get results_by_type() {
        return this._results_by_type;
    }
}
exports.SearchResults = SearchResults;
