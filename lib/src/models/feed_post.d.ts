import { AccessControl } from "./access_control";
import { Serializable } from "./model";
export declare class FeedPost implements Serializable {
    private mMessage?;
    private mImage?;
    private mVisibility?;
    setMessage(message: string): FeedPost;
    setImage(image: File): FeedPost;
    setVisibility(visible: AccessControl): FeedPost;
    toJson(): string;
}
