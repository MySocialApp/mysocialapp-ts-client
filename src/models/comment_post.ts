import {Serializable} from "./model";
import {FileData} from "./file";
import {TagEntities} from "./tag_entities";

export class CommentPost implements Serializable {
    _message: string;
    _file: FileData;
    _tag_entities: TagEntities;

    setMessage(message: string): CommentPost {
        this._message = message;
        return this;
    }

    setImage(file: FileData): CommentPost {
        this._file = file;
        return this;
    }

    setTagEntities(tagEntities: TagEntities): CommentPost {
        this._tag_entities = tagEntities;
        return this;
    }

    toJson(): string {
        return JSON.stringify(this.getJsonParameters());
    }

    getJsonParameters(): {} {
        return {message: this._message};
    }

    hasPhoto(): boolean {
        return this._file !== undefined;
    }

}