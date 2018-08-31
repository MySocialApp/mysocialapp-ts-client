import {Rest} from "./rest";
import {Comment} from "../models/comment";
import {TagEntities} from "../models/tag_entities";
import {FileData} from "../models/file";
import {GenericFormData} from "../models/generic_form_data";

export class RestPhotoComment extends Rest {
    async list(photoId: string): Promise<Comment[]> {
        return this.conf.getList(new Comment(), Rest.params("photo/{id}/comment", {id: photoId})) as Promise<Comment[]>;
    }

    async create(photoId: string, comment: Comment): Promise<Comment> {
        return this.conf.post(new Comment(), Rest.params("/photo/{id}/comment", {id: photoId}), comment) as Promise<Comment>;
    }

    async createPhoto(photoId: string, photo: FileData, message?: string, tagEntities?: TagEntities, albumName?: string): Promise<Comment> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        if (message !== undefined) {
            f.append("name", message);
        }
        if (tagEntities !== undefined) {
            f.append("tag_entities", tagEntities.toJson());
        }
        if (albumName !== undefined) {
            f.append("album", albumName);
        }
        return this.conf.postMultipart(new Comment(), Rest.params("/photo/{id}/comment/photo", {id: photoId}), f) as Promise<Comment>;
    }
}
