import { Serializable } from "./model";
import { BaseWall } from "./base_wall";
import { TagEntities } from "./tag_entities";
import { Taggable } from "./taggable";
import { AccessControl } from "./access_control";
export declare class TextWallMessage extends BaseWall implements Serializable, Taggable {
    message: string;
    access_control?: AccessControl;
    private _tag_entities?;
    getJsonParameters(): {};
    tag_entities: TagEntities;
    setMessage(message: string): TextWallMessage;
    setTagEntities(t: TagEntities): TextWallMessage;
    setVisibility(ac: AccessControl): TextWallMessage;
}
