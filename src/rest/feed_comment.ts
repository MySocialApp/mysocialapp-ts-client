import {Rest} from "./rest";
import {Comment} from "../models/comment";
import {CommentPost} from "../models/comment_post";
import {TagEntities} from "../models/tag_entities";
import {FileData} from "../models/file";
import {GenericFormData} from "../models/generic_form_data";


export class RestFeedComment extends Rest {

    async create(id: string, comment: CommentPost): Promise<Comment> {
        return this.conf.post(new Comment(), Rest.params("feed/{id}/comment", {id: id}), comment) as Promise<Comment>;
    }

    async list(id: string): Promise<Comment[]> {
        return this.conf.getList(new Comment(), Rest.params("feed/{id}/comment", {id: id})) as Promise<Comment[]>;
    }

    async addPhoto(id: string, photo: FileData, message?: string, tagEntities?: TagEntities): Promise<Comment> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        if (message !== undefined) {
            f.append("name", message);
        }
        if (tagEntities !== undefined) {
            f.append("tag_entities", tagEntities.toJson());
        }
        return this.conf.postMultipart(new Comment(), Rest.params("/feed/{id}/comment/photo", {id: id}), f) as Promise<Comment>;
    }

    async update(feedId: string, commentId: string, comment: CommentPost): Promise<Comment> {
        return this.conf.put(new Comment(), Rest.params("feed/{id}/comment/{commentId}", {
            id: feedId,
            commentId: commentId
        }), comment) as Promise<Comment>;
    }

    async delete(feedId: string, commentId: string): Promise<void> {
        return this.conf.delete(Rest.params("feed/{id}/comment/{commentId}", {
            id: feedId,
            commentId: commentId
        })) as Promise<void>;
    }


}
