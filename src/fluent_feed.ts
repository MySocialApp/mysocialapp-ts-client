import {Session} from "./session";
import {User} from "./models/user";
import {Feed} from "./models/feed";
import {FeedPost} from "./models/feed_post";

export class FluentFeed {
    private session: Session;

    constructor(session: Session) {
        this.session = session;
    }
    async sendWallPost(feedPost: FeedPost): Promise<Feed> {
        return this.session.clientService.feed.create(feedPost, this.session.account.account.id_str);
    }
}