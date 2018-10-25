import {Rest} from "./rest";
import {PhotoAlbum} from "../models/photo_album";

export class RestUserAlbum extends Rest {
    async list(userId: string, page: number, size: number, params?: {}): Promise<PhotoAlbum[]> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['size'] = size;
        let path = Rest.params("/user/{id}/album?", {id: userId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new PhotoAlbum(), path) as Promise<PhotoAlbum[]>;
    }
}