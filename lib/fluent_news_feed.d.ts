/// <reference types="node" />
import { FluentAbstract } from "./fluent_abstract";
import { Feed } from "./models/feed";
import { FeedPost } from "./models/feed_post";
import { SearchResults } from "./models/search_results";
import { SearchFeed } from "./search/feed";
export declare class FluentNewsFeed extends FluentAbstract {
    list(page: number, size?: number, params?: {}, algorithm?: {}): Promise<Feed[]>;
    stream(params?: {}, algorithm?: {}): AsyncIterableIterator<Feed>;
    get(id: string): Promise<Feed>;
    getByExternalId(id: string): Promise<Feed>;
    create(feedPost: FeedPost): Promise<Feed>;
    search(search: SearchFeed, page: number, size?: number): Promise<SearchResults>;
}
