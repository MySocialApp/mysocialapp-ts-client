import {Rest} from "./rest";
import {Photo} from "../models/photo";
import {TagEntities} from "../models/tag_entities";
import {Feed} from "../models/feed";
import {FileData} from "../models/file";
import {GenericFormData} from "../models/generic_form_data";
import {AccessControl} from "../models/access_control";

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

    async create(photo: FileData, message?: string, tagEntities?: TagEntities, albumName?: string, visibility: AccessControl = AccessControl.Friend): Promise<Feed> {
        let f = new GenericFormData();
        f.set("file", photo.blob, photo.blob ? photo.blob.type : null, "image");
        if (message !== undefined) {
            f.append("message", message);
        }
        if (tagEntities !== undefined) {
            f.append("tag_entities", tagEntities.toJson());
        }
        if (albumName !== undefined) {
            f.append("album", albumName);
        }
        if (visibility !== undefined) {
            f.append("access_control", visibility);
        }
        return this.conf.postMultipart(new Feed(), "/photo/base64", f) as Promise<Feed>;
    }

    async update(photoId: string, photo: Photo): Promise<Photo> {
        return this.conf.put(new Photo(), "/photo/" + photoId, photo) as Promise<Photo>;
    }
}