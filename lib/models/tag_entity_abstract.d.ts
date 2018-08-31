import { Taggable } from "./taggable";
import { TagEntities } from "./tag_entities";
import { Model } from "./model";
export declare class TagEntityAbstract extends Model implements Taggable {
    private _tag_entities?;
    getJsonParameters(): {};
    tag_entities: TagEntities;
}
