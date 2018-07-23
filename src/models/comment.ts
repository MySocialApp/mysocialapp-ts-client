import {Photo} from "./photo";
import {Base} from "./base";
import {Taggable} from "./taggable";
import {TagEntities} from "./tag_entities";

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
}