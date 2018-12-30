import {Rest} from "./rest";
import {PhotoAlbum} from "../models/photo_album";

export class RestPhotoAlbum extends Rest {
    async list(page: number, size: number): Promise<PhotoAlbum[]> {
        return this.conf.getList(new PhotoAlbum(), "/photo/album?" + Rest.encodeQueryData({
            page: page,
            size: size
        })) as Promise<PhotoAlbum[]>;
    }

    async get(id: string): Promise<PhotoAlbum> {
        let path = Rest.params("/photo/album/{id}", {id: id});
        return this.conf.get(new PhotoAlbum(), path) as  Promise<PhotoAlbum>;
    }

    async create(photoAlbum: PhotoAlbum): Promise<PhotoAlbum> {
        return this.conf.post(new PhotoAlbum(), "/photo/album", photoAlbum) as Promise<PhotoAlbum>;
    }

    async update(id: string, photoAlbum: PhotoAlbum): Promise<PhotoAlbum> {
        return this.conf.put(new PhotoAlbum(), "/photo/album/" + id, photoAlbum) as Promise<PhotoAlbum>;
    }

    async delete(id: string): Promise<void> {
        return this.conf.deleteVoid("/photo/album/" + id);
    }

}
