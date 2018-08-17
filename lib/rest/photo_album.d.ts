import { Rest } from "./rest";
import { PhotoAlbum } from "../models/photo_album";
export declare class RestPhotoAlbum extends Rest {
    list(page: number, size: number): Promise<PhotoAlbum[]>;
    get(id: string): Promise<PhotoAlbum>;
    create(photoAlbum: PhotoAlbum): Promise<PhotoAlbum>;
    update(id: string, photoAlbum: PhotoAlbum): Promise<PhotoAlbum>;
    delete(id: string): Promise<void>;
}
