import { Feed } from "./models/feed";
import { TextWallMessage } from "./models/text_wall_message";
import { FluentAbstract } from "./fluent_abstract";
export declare class FluentFeed extends FluentAbstract {
    sendWallPost(feedPost: TextWallMessage): Promise<Feed>;
}
