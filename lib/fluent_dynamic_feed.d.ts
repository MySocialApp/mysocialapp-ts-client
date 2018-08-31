/// <reference types="node" />
import { FluentAbstract } from "./fluent_abstract";
import { Feed } from "./models/feed";
import { FeedPost } from "./models/feed_post";
export declare class FluentDynamicFeed extends FluentAbstract {
    list(feedId: string, page?: number, size?: number): Promise<Feed[]>;
    stream(feedId: string): AsyncIterableIterator<Feed>;
    get(feedId: string): Promise<Feed>;
    create(feedId: string, feedPost: FeedPost): Promise<Feed>;
}
