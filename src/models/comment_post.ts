import {Serializable} from "./model";

export class CommentPost implements Serializable {
    private mMessage: string;
    private mFile: File;

    setMessage(message: string): CommentPost {
        this.mMessage = message;
        return this;
    }

    setImage(file: File): CommentPost {
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