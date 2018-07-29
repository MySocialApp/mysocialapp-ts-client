import { Session } from "./session";
import { Feed } from "./models/feed";
import { FeedPost } from "./models/feed_post";
export declare class FluentFeed {
    private session;
    constructor(session: Session);
    sendWallPost(feedPost: FeedPost): Promise<Feed>;
}
