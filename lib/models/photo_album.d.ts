import { Model } from "./model";
import { Photo } from "./photo";
export declare class PhotoAlbum extends Model {
    private _photos;
    name?: string;
    photos: Photo[];
    setName(value: string): PhotoAlbum;
}
