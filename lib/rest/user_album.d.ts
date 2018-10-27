import { Rest } from "./rest";
import { PhotoAlbum } from "../models/photo_album";
export declare class RestUserAlbum extends Rest {
    list(userId: string, page: number, size: number, params?: {}): Promise<PhotoAlbum[]>;
}
