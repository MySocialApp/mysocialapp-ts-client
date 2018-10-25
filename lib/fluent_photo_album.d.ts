import { FluentAbstract } from "./fluent_abstract";
import { PhotoAlbum } from "./models/photo_album";
export declare class FluentPhotoAlbum extends FluentAbstract {
    list(page: number, size?: number): Promise<PhotoAlbum[]>;
    get(id: string): Promise<PhotoAlbum>;
    delete(id: string): Promise<void>;
    create(album: PhotoAlbum): Promise<PhotoAlbum>;
}
