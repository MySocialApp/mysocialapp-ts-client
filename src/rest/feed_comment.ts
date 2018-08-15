import {Rest} from "./rest";
import {Comment} from "../models/comment";
import {CommentPost} from "../models/comment_post";
import {TagEntities} from "../models/tag_entities";


export class RestFeedComment extends Rest {

    async create(id: string, comment: CommentPost): Comment {
        return this.conf.post(new Comment(), Rest.params("feed/{id}/comment", {id: id}), comment) as Promise<Comment>;
    }

    async list(id: string): Comment[] {
        return this.conf.getList(new Comment(), Rest.params("feed/{id}/comment", {id: id})) as Promise<Comment[]>;
    }

    async addPhoto(id: string, photo: File, message?: string, tagEntities?: TagEntities): Comment {
        let f = new FormData();
        f.set("file", photo);
        if (message !== undefined) {
            f.set("name", message);
        }
        if (tagEntities !== undefined) {
            f.set("tag_entities", tagEntities.toJson());
        }
        return this.conf.postMultipart(new Comment(), Rest.params("/feed/{id}/comment/photo", {id:id}), f) as Promise<Comment>;
    }



}
