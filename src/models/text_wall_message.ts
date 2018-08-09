import {Serializable} from "./model";
import {BaseWall} from "./base_wall";
import {TagEntities} from "./tag_entities";
import {Taggable} from "./taggable";
import {AccessControl} from "./access_control";

export class TextWallMessage extends BaseWall implements Serializable, Taggable {

    message: string;
    access_control?: AccessControl;
    private _tag_entities?: TagEntities;

    toJson(): string {
        // TODO complete serialization
        return JSON.stringify({
            message: this.message,
            tag_entities: this.tag_entities,
            access_control: this.access_control,
        });
    }

    get tag_entities(): TagEntities {
        return this._tag_entities;
    }

    set tag_entities(t: TagEntities) {
        this._tag_entities = new TagEntities(t);
    }

    setMessage(message: string): TextWallMessage {
        this.message = message;
        return this
    }

    setTagEntities(t: TagEntities): TextWallMessage {
        this.tag_entities = t;
        return this;
    }

    setVisibility(ac: AccessControl): TextWallMessage {
        this.access_control = ac;
        return this;
    }
}