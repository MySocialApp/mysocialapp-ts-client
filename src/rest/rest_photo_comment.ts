import {Rest} from "./rest";
import {Comment} from "../models/comment";
import {TagEntities} from "../models/tag_entities";

export class RestPhotoComment extends Rest {
    list(photoId: string): Promise<Comment[]> {
        return this.conf.getList(new Comment(), Rest.params("photo/{id}/comment", {id: photoId})) as Promise<Comment[]>;
    }

    create(photoId: string, comment: Comment): Promise<Comment> {
        return this.conf.post(new Comment(), Rest.params("/photo/{id}/comment", {id: photoId}), comment) as Promise<Comment>;
    }

    createPhoto(photoId: string, photo: File, message?: string, tagEntities?: TagEntities, albumName?: string): Promise<Comment> {
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
