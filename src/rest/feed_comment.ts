import {Rest} from "./rest";
import {Comment} from "../models/comment";
import {CommentPost} from "../models/comment_post";


export class RestFeedComment extends Rest {

    add(id: string, comment: CommentPost): Promise<Comment> {
        return this.conf.post(new Comment(), Rest.params("feed/{id}/comment", {id: id}), comment) as Promise<Comment>;
    }

    list(id: string): Promise<Comment[]> {
        return this.conf.getList(new Comment(), Rest.params("feed/{id}/comment", {id: id})) as Promise<Comment[]>;
    }

}
