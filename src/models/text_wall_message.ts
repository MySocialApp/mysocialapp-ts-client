import {Serializable} from "./model";
import {BaseWall} from "./base_wall";
import {TagEntities} from "./tag_entities";
import {Taggable} from "./taggable";

export class TextWallMessage extends BaseWall implements Serializable, Taggable {

    _tag_entities?: TagEntities;

    toJson(): string {
        // TODO complete serialization
        return JSON.stringify({});
    }

    get tag_entities(): TagEntities {
        return this._tag_entities;
    }

    set tag_entities(t: TagEntities) {
        this._tag_entities = new TagEntities(t);
    }
}