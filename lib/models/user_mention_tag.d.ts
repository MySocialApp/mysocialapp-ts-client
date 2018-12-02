import { TagEntityAbstract } from "./tag_entity_abstract";
import { User } from "./user";
import { Feed } from "./feed";
export declare class UserMentionTag extends TagEntityAbstract {
    private _mentioned_user?;
    private _target?;
    start_index: number;
    end_index: number;
    text: string;
    readonly text_shown: string;
    indices: number[];
    mentioned_user: User;
    target: Feed;
}
