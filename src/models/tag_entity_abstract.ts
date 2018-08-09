import {Taggable} from "./taggable";
import {Base} from "./base";
import {TagEntities} from "./tag_entities";

export class TagEntityAbstract extends Base implements Taggable {
    private _tag_entities?: TagEntities;

    get tag_entities(): TagEntities {
        return this._tag_entities;
    }

    set tag_entities(t: TagEntities) {
        this._tag_entities = new TagEntities(t);
    }
}