import {Session} from "./session";
import {Feed} from "./models/feed";
import {TextWallMessage} from "./models/text_wall_message";

export class FluentFeed {
    private session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async sendWallPost(feedPost: TextWallMessage): Promise<Feed> {
        return this.session.clientService.feed.addMessage(feedPost);
    }
}