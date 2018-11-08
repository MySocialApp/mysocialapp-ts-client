import {Model} from "./model";
import {TagEntities} from "./tag_entities";
import {Base} from "./base";
import {BaseWall} from "./base_wall";

export class Photo extends BaseWall {
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

    get target(): Base {
        return new Base(this._target);
    }

    set target(o: Base) {
        this._target = new Base(o);
    }

    get body_image_url(): string {
        return this.high_url;
    }

    set body_image_url(s: string) {

    }
}