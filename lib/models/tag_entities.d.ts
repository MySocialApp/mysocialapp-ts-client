import { Model } from "./model";
import { UserMentionTag } from "./user_mention_tag";
import { URLTag } from "./url_tag";
import { HashTag } from "./hash_tag";
export declare class TagEntities extends Model {
    private _user_mention_tags;
    private _url_tags;
    private _hash_tags;
    getJsonParameters(): {};
    user_mention_tags: UserMentionTag[];
    url_tags: URLTag[];
    hash_tags: HashTag[];
}
