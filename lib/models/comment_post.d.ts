import { Serializable } from "./model";
import { FileData } from "./file";
export declare class CommentPost implements Serializable {
    private mMessage;
    private mFile;
    setMessage(message: string): CommentPost;
    setImage(file: FileData): CommentPost;
    toJson(): string;
    getJsonParameters(): {};
}
