import {AccessControl} from "./access_control";
import {Serializable} from "./model";
import {TextWallMessage} from "./text_wall_message";
import {TagEntities} from "./tag_entities";

export class FeedPost implements Serializable {
    _message?: string;
    _image?: File;
    _visibility?: AccessControl;
    _tag_entities?: TagEntities;


    setMessage(message: string): FeedPost {
        this._message = message;
        return this;
    }

    setImage(image: File): FeedPost {
        this._image = image;
        return this;
    }

    setTagEntities(t: TagEntities) {
        this._tag_entities = t;
    }

    setVisibility(visible: AccessControl): FeedPost {
        this._visibility = visible;
        return this;
    }

    toJson(): string {
        return JSON.stringify({
            message: this._message,
            access_control: this._visibility !== undefined ? this._visibility : AccessControl.Friend
        });
    }

    hasPhoto(): boolean {
        return this._image !== undefined;
    }

    get textWallMessage(): TextWallMessage {
        return new TextWallMessage({}).setVisibility(this._visibility).setMessage(this._message).setTagEntities(this._tag_entities);
    }
}