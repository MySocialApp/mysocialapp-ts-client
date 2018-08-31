import {Serializable} from "./model";
import {FileData} from "./file";

export class CommentPost implements Serializable {
    private mMessage: string;
    private mFile: FileData;

    setMessage(message: string): CommentPost {
        this.mMessage = message;
        return this;
    }

    setImage(file: FileData): CommentPost {
        this.mFile = file;
        return this;
    }

    toJson(): string {
        return JSON.stringify(this.getJsonParameters());
    }

    getJsonParameters(): {} {
        return {message: this.mMessage};
    }

}