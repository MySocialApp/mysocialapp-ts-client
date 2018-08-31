import {Rest} from "./rest";
import {Comment} from "../models/comment";
import {Photo} from "../models/photo";
import {TagEntities} from "../models/tag_entities";
import {FileData} from "../models/file";
import {GenericFormData} from "../models/generic_form_data";
import {CommentPost} from "../models/comment_post";

export class RestStatusComment extends Rest {
    async list(statusId: string): Promise<Comment[]> {
        return this.conf.getList(new Comment(), Rest.params("/status/{id}/comment", {id: statusId})) as Promise<Comment[]>;
    }

    async create(statusId: string, comment: CommentPost): Promise<Comment> {
        return this.conf.post(new Comment(), Rest.params("/status/{id}/comment", {id: statusId}), comment) as Promise<Comment>;
    }

    async update(statusId: string, commentId: string, comment: Comment): Promise<Comment> {
        let path = Rest.params("/status/{id}/comment/{commentId}", {id: statusId, commentId: commentId});
        return this.conf.put(new Comment(), path, comment) as Promise<Comment>;
    }

    async createPhoto(statusId: string, photo: FileData, message?: string, tagEntities?: TagEntities): Promise<Photo> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        if (message !== undefined) {
            f.append("name", message);
        }
        if (tagEntities !== undefined) {
            f.append("tag_entities", tagEntities.toJson());
        }
        let path = Rest.params("/status/{id}/comment/photo", {id: statusId});
        return this.conf.postMultipart(new Photo(), path, f) as Promise<Photo>;
    }
}