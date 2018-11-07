import { TagEntities } from "./tag_entities";
import { Base } from "./base";
import { BaseWall } from "./base_wall";
export declare class Photo extends BaseWall {
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
    readonly body_image_url: string;
}
