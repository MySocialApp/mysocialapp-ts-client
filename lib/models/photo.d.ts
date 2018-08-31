import { Model } from "./model";
import { TagEntities } from "./tag_entities";
import { Base } from "./base";
export declare class Photo extends Model {
    message: string;
    url: string;
    small_url: string;
    medium_url: string;
    high_url: string;
    visible: boolean;
    _tag_entities: TagEntities;
    _target: Base;
    tag_entities: TagEntities;
    target: Base;
}
