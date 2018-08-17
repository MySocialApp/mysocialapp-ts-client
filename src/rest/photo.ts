import {Rest} from "./rest";
import {Photo} from "../models/photo";
import {TagEntities} from "../models/tag_entities";
import {Feed} from "../models/feed";

export class RestPhoto extends Rest {
    async list(page: number, size?: number): Promise<Photo[]> {
        let params = {page: page, size: size !== undefined ? size : 10};
        return this.conf.getList(new Photo(), "/photo?" + Rest.encodeQueryData(params)) as Promise<Photo[]>;
    }

    async get(photoId: string): Promise<Photo> {
        return this.conf.get(new Photo(), "/photo/" + photoId) as Promise<Photo>;
    }

    async delete(photoId: string): Promise<void> {
        return this.conf.delete("/photo/" + photoId);
    }

    async create(photo: File, message?: string, tagEntities?: TagEntities, albumName?: string): Promise<Feed> {
        let f = new FormData();
        f.set("file", photo);
        if (message !== undefined) {
            f.set("name", message);
        }
        if (tagEntities !== undefined) {
            f.set("tag_entities", tagEntities.toJson());
        }
        if (albumName !== undefined) {
            f.set("album", albumName);
        }
        return this.conf.postMultipart(new Photo(), "/photo", f) as Promise<Feed>;
    }

    async update(photoId: string, photo: Photo): Promise<Photo> {
        return this.conf.put(new Photo(), "/photo/" + photoId, photo) as Promise<Photo>;
    }
}