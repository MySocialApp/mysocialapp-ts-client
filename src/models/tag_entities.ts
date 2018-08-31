import {Model} from "./model";
import {UserMentionTag} from "./user_mention_tag";
import {URLTag} from "./url_tag";
import {HashTag} from "./hash_tag";
import {listToParameters} from "./utils";

export class TagEntities extends Model {
    private _user_mention_tags: UserMentionTag[];
    private _url_tags: URLTag[];
    private _hash_tags: HashTag[];

    getJsonParameters(): {} {
        return {
            user_mention_tags: listToParameters(this.user_mention_tags),
            url_tags: listToParameters(this.url_tags),
            hash_tags: listToParameters(this.hash_tags)
        }
    }

    get user_mention_tags(): UserMentionTag[] {
        return this._user_mention_tags;
    }

    set user_mention_tags(list: UserMentionTag[]) {
        let listObj: UserMentionTag[] = [];
        for (let u of list) {
            listObj.push(new UserMentionTag(u));
        }
        this._user_mention_tags = listObj;
    }

    get url_tags(): URLTag[] {
        return this._url_tags;
    }

    set url_tags(list: URLTag[]) {
        let listObj: URLTag[] = [];
        for (let u of list) {
            listObj.push(new URLTag(u));
        }
        this._url_tags = listObj;
    }

    get hash_tags(): HashTag[] {
        return this._hash_tags;
    }

    set hash_tags(list: HashTag[]) {
        let listObj: HashTag[] = [];
        for (let u of list) {
            listObj.push(new HashTag(u));
        }
        this._hash_tags = listObj;
    }
}