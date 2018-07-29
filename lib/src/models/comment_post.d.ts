import { Serializable } from "./model";
export declare class CommentPost implements Serializable {
    private mMessage;
    private mFile;
    setMessage(message: string): CommentPost;
    setImage(file: File): CommentPost;
    toJson(): string;
}
