import { SearchResultTypes } from "./search_result_types";
import { SearchType } from "./search_type";
import { Model } from "./model";
export declare class SearchResults extends Model {
    matched_count?: number;
    query_id?: string;
    page?: number;
    size?: number;
    matched_types?: SearchType[];
    private _results_by_type?;
    results_by_type: SearchResultTypes;
}
