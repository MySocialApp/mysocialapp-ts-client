import {Rest} from "./rest";
import {Comment} from "../models/comment";
import {TagEntities} from "../models/tag_entities";

export class RestPhotoComment extends Rest {
    async list(photoId: string): Comment[] {
        return this.conf.getList(new Comment(), Rest.params("photo/{id}/comment", {id: photoId})) as Promise<Comment[]>;
    }

    async create(photoId: string, comment: Comment): Comment {
        return this.conf.post(new Comment(), Rest.params("/photo/{id}/comment", {id: photoId}), comment) as Promise<Comment>;
    }

    async createPhoto(photoId: string, photo: File, message?: string, tagEntities?: TagEntities, albumName?: string): Comment {
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
        return this.conf.postMultipart(new Comment(), Rest.params("/photo/{id}/comment/photo", {id: photoId}), f) as Promise<Comment>;
    }
}
