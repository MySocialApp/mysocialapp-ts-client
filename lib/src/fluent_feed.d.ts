import { Session } from "./session";
import { Feed } from "./models/feed";
import { TextWallMessage } from "./models/feed_post";
export declare class FluentFeed {
    private session;
    constructor(session: Session);
    sendWallPost(feedPost: TextWallMessage): Promise<Feed>;
}
