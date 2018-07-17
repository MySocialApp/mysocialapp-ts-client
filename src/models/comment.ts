import {Serializable} from "./model";
import {Photo} from "./photo";
import {Base} from "./base";

export class Comment extends Base {

    message: string;
    _photo: Photo;

    set photo(o: Photo) {
        this._photo = new Photo(o, this.conf);
    }

    get photo(): Photo {
        return this._photo;
    }
}