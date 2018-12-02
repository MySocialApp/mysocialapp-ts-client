import { Photo } from "./photo";
import { Base } from "./base";
import { Taggable } from "./taggable";
import { TagEntities } from "./tag_entities";
export declare class Comment extends Base implements Taggable {
    private _photo;
    private _tag_entities?;
    private _parent;
    message: string;
    photo: Photo;
    parent: Base;
    tag_entities: TagEntities;
    save(): Promise<Comment>;
    delete(): Promise<void>;
}
