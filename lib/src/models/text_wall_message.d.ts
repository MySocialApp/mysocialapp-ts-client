import { Serializable } from "./model";
import { BaseWall } from "./base_wall";
import { TagEntities } from "./tag_entities";
import { Taggable } from "./taggable";
export declare class TextWallMessage extends BaseWall implements Serializable, Taggable {
    _tag_entities?: TagEntities;
    toJson(): string;
    tag_entities: TagEntities;
}
