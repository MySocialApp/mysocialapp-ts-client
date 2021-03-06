import { AccessControl } from "./access_control";
import { Serializable } from "./model";
import { TextWallMessage } from "./text_wall_message";
import { TagEntities } from "./tag_entities";
import { FileData } from "./file";
export declare class FeedPost implements Serializable {
    _message?: string;
    _image?: FileData;
    _visibility?: AccessControl;
    _tag_entities?: TagEntities;
    payload?: {};
    toJson(): string;
    getJsonParameters(): {};
    setMessage(message: string): FeedPost;
    setImage(image: FileData): FeedPost;
    setTagEntities(t: TagEntities): void;
    setVisibility(visible: AccessControl): FeedPost;
    setPayload(payload: {}): FeedPost;
    hasPhoto(): boolean;
    readonly textWallMessage: TextWallMessage;
}
