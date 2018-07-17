import {AccessControl} from "./feed";
import {Serializable} from "./model";

export class FeedPost implements Serializable{
    private mMessage?: string;
    private mImage?: File;
    private mVisibility?: AccessControl;

    setMessage(message: string): FeedPost {
        this.mMessage = message;
        return this;
    }

    setImage(image: File): FeedPost {
        this.mImage = image;
        return this;
    }

    setVisibility(visible: AccessControl): FeedPost {
        this.mVisibility = visible;
        return this;
    }

    toJson(): string {
        return JSON.stringify({
            message: this.mMessage,
            visibility: this.mVisibility !== undefined? this.mVisibility : AccessControl.Friend
        });
    }
}