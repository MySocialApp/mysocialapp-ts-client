import {Model} from "./model";
import {Photo} from "./photo";

export class PhotoAlbum extends Model {
    private _photos: Photo[];
    name?: string;

    set photos(photos: Photo[]) {
        let list = [] as Photo[];
        for (let p in photos) {
            list.push(new Photo(p, this.conf));
        }
        this._photos = list;
    }

    get photos(): Photo[] {
        return this._photos;
    }

    setName(value: string): PhotoAlbum {
        this.name = value;
        return this;
    }
}