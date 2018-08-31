import {Taggable} from "./taggable";
import {TagEntities} from "./tag_entities";
import {Model} from "./model";

export class TagEntityAbstract extends Model implements Taggable {
    private _tag_entities?: TagEntities;

    getJsonParameters(): {} {
        return {
            tag_entities: this.tag_entities.getJsonParameters(),
        };
    }

    get tag_entities(): TagEntities {
        return this._tag_entities;
    }

    set tag_entities(t: TagEntities) {
        this._tag_entities = new TagEntities(t);
    }
}