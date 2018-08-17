import { Taggable } from "./taggable";
import { Base } from "./base";
import { TagEntities } from "./tag_entities";
export declare class TagEntityAbstract extends Base implements Taggable {
    private _tag_entities?;
    tag_entities: TagEntities;
}
