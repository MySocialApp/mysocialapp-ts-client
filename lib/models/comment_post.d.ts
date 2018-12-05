import { Serializable } from "./model";
import { FileData } from "./file";
import { TagEntities } from "./tag_entities";
export declare class CommentPost implements Serializable {
    _message: string;
    _file: FileData;
    _tag_entities: TagEntities;
    setMessage(message: string): CommentPost;
    setImage(file: FileData): CommentPost;
    setTagEntities(tagEntities: TagEntities): CommentPost;
    toJson(): string;
    getJsonParameters(): {};
    hasPhoto(): boolean;
}
