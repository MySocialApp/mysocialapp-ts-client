import {Model} from "./model";
import {TagEntities} from "./tag_entities";
import {Base} from "./base";

export class Photo extends Model {
    message: string;
    url: string;
    small_url: string;
    medium_url: string;
    high_url: string;
    visible: boolean;
    _tag_entities: TagEntities;
    _target: Base;

    get tag_entities(): TagEntities {
        return new TagEntities(this._tag_entities);
    }

    set tag_entities(o: TagEntities) {
        this._tag_entities = new TagEntities(o);
    }
}