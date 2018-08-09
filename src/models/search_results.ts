import {SearchResultTypes} from "./search_result_types";
import {SearchType} from "./search_type";
import {Model} from "./model";

export class SearchResults extends Model {
    matched_cout?: number;
    query_id?: string;
    page?: number;
    size?: number;
    matched_types?: SearchType[];
    private _results_by_type?: SearchResultTypes;

    set results_by_type(results: SearchResultTypes) {
        this._results_by_type = new SearchResultTypes(results);
    }

    get results_by_type(): SearchResultTypes {
        return this._results_by_type;
    }
}