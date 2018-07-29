import { Rest } from "./rest";
import { Feed } from "../models/feed";
import { FeedPost } from "../models/feed_post";
export declare class RestFeed extends Rest {
    get(id: string): Promise<Feed>;
    list(page?: number, params?: {}): Promise<Feed[]>;
    delete(id: string): Promise<void>;
    create(feedPost: FeedPost, userId: string): Promise<Feed>;
}
