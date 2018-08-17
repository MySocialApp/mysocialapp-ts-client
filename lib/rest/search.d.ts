import { Rest } from "./rest";
import { SearchResults } from "../models/search_results";
export declare class RestSearch extends Rest {
    get(page: number, size?: number, params?: {}): Promise<SearchResults>;
}
