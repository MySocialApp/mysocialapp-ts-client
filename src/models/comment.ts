import {Photo} from "./photo";
import {Base} from "./base";
import {Taggable} from "./taggable";
import {TagEntities} from "./tag_entities";
import {RestFeedComment} from "../rest/feed_comment";
import {CommentPost} from "./comment_post";

export class Comment extends Base implements Taggable {

    private _photo: Photo;
    private _tag_entities?: TagEntities;
    private _parent: Base;
    message: string;

    set photo(o: Photo) {
        this._photo = new Photo(o, this.conf);
    }

    get photo(): Photo {
        return this._photo;
    }

    set parent(o: Base) {
        this._parent = new Base(o, this.conf);
    }

    get parent(): Base {
        return this._parent;
    }

    get tag_entities(): TagEntities {
        return this._tag_entities;
    }

    set tag_entities(t: TagEntities) {
        this._tag_entities = new TagEntities(t);
    }

    async save(): Promise<Comment> {
        return new RestFeedComment(this.conf).update(this.parent.id, this.id, new CommentPost().setMessage(this.message));
    }

    async delete(): Promise<void> {
        return new RestFeedComment(this.conf).delete(this.parent.id, this.id);
    }
}