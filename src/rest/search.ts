import {Rest} from "./rest";
import {SearchResults} from "../models/search_results";

export class RestSearch extends Rest {
    get(page: number, size?: number, params?: {}): Promise<SearchResults> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['size'] = size !== undefined ? size: size;
        return this.conf.get(new SearchResults(), "/search?"+Rest.encodeQueryData(params)) as Promise<SearchResults>;
    }
}