import { Photo } from "./photo";
import { Base } from "./base";
import { Taggable } from "./taggable";
import { TagEntities } from "./tag_entities";
export declare class Comment extends Base implements Taggable {
    _photo: Photo;
    _tag_entities?: TagEntities;
    message: string;
    parent: Base;
    photo: Photo;
    tag_entities: TagEntities;
    save(): Promise<Comment>;
    delete(): Promise<void>;
}
