import {Feed} from "./models/feed";
import {TextWallMessage} from "./models/text_wall_message";
import {FluentAbstract} from "./fluent_abstract";

export class FluentFeed extends FluentAbstract {

    async sendWallPost(feedPost: TextWallMessage): Feed {
        return this.session.clientService.feed.addMessage(feedPost);
    }
}