import {BaseWall} from "./base_wall";
import {CommentPost} from "./comment_post";
import {Like} from "./like";
import {Comment} from "./comment";
import {RestStatusLike} from "../rest/status_like";
import {RestStatusComment} from "../rest/status_comment";
import {RestStatus} from "../rest/status";

export class Status extends BaseWall {
    message?: string;

    getJsonParameters(): {} {
        let o = {
            message: this.message,
        };
        if (this.payload !== undefined) {
            o['payload'] = this.payload;
        }
        return o
    }

    get bodyMessage(): string {
        return this.message;
    }

    async getLikes(): Promise<Like[]> {
        return (new RestStatusLike(this.conf)).list(this.id);
    }

    async addLike(): Promise<Like> {
        return (new RestStatusLike(this.conf)).create(this.id_str);
    }

    async deleteLike(): Promise<void> {
        return (new RestStatusLike(this.conf)).delete(this.id_str);
    }

    async getComments(): Promise<Comment[]> {
        return (new RestStatusComment(this.conf)).list(this.id_str);
    }

    async addComment(comment: CommentPost): Promise<Comment> {
        return (new RestStatusComment(this.conf)).create(this.id_str, comment);
    }

    async delete(): Promise<void> {
        return (new RestStatus(this.conf)).delete(this.id_str);
    }
}