import {Rest} from "./rest";
import {PhotoAlbum} from "../models/photo_album";

export class RestPhotoAlbum extends Rest {
    list(page: number, size: number): Promise<PhotoAlbum[]> {
        return this.conf.getList(new PhotoAlbum(), "/photo/album?" + Rest.encodeQueryData({
            page: page,
            size: size
        })) as Promise<PhotoAlbum[]>;
    }

    get(id: string, params: {}): Promise<PhotoAlbum> {
        params = params !== undefined ? params : {};
        let path = Rest.params("/photo/album/{id}/?", {id: id}) + Rest.encodeQueryData(params);
        return this.conf.get(new PhotoAlbum(), path) as  Promise<PhotoAlbum>;
    }

    create(photoAlbum: PhotoAlbum): Promise<PhotoAlbum> {
        return this.conf.post(new PhotoAlbum(), "/photo/album", photoAlbum) as Promise<PhotoAlbum>;
    }

    update(id: string, photoAlbum: PhotoAlbum): Promise<PhotoAlbum> {
        return this.conf.put(new PhotoAlbum(), "/photo/album/" + id, photoAlbum) as Promise<PhotoAlbum>;
    }

    delete(id: string): Promise<void> {
        return this.conf.delete("/photo/album/" + id);
    }

}