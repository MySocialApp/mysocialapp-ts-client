import { AccessControl } from "./access_control";
import { Serializable } from "./model";
import { TextWallMessage } from "./text_wall_message";
import { TagEntities } from "./tag_entities";
export declare class FeedPost implements Serializable {
    _message?: string;
    _image?: File;
    _visibility?: AccessControl;
    _tag_entities?: TagEntities;
    toJson(): string;
    getJsonParameters(): {};
    setMessage(message: string): FeedPost;
    setImage(image: File): FeedPost;
    setTagEntities(t: TagEntities): void;
    setVisibility(visible: AccessControl): FeedPost;
    hasPhoto(): boolean;
    readonly textWallMessage: TextWallMessage;
}
