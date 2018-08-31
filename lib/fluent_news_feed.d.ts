/// <reference types="node" />
import { FluentAbstract } from "./fluent_abstract";
import { Feed } from "./models/feed";
import { FeedPost } from "./models/feed_post";
import { FeedsSearchResult } from "./models/search_result_types";
export declare class FluentNewsFeed extends FluentAbstract {
    list(page: number, size?: number): Promise<Feed[]>;
    stream(): AsyncIterableIterator<Feed>;
    get(id: string): Promise<Feed>;
    create(feedPost: FeedPost): Promise<Feed>;
    /**
     * TODO
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<FeedsSearchResult>}
     */
    search(search: {}, page: number, size?: number): Promise<FeedsSearchResult>;
}
