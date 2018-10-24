import {Photo} from "./photo";
import {Base} from "./base";
import {Taggable} from "./taggable";
import {TagEntities} from "./tag_entities";
import {RestFeedComment} from "../rest/feed_comment";
import {CommentPost} from "./comment_post";

export class Comment extends Base implements Taggable {

    _photo: Photo;
    _tag_entities?: TagEntities;
    message: string;
    parent: Base;

    set photo(o: Photo) {
        this._photo = new Photo(o, this.conf);
    }

    get photo(): Photo {
        return this._photo;
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