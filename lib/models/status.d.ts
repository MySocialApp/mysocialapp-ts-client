import { BaseWall } from "./base_wall";
import { CommentPost } from "./comment_post";
import { Like } from "./like";
import { Comment } from "./comment";
export declare class Status extends BaseWall {
    message?: string;
    getJsonParameters(): {};
    readonly bodyMessage: string;
    getLikes(): Promise<Like[]>;
    addLike(): Promise<Like>;
    deleteLike(): Promise<void>;
    getComments(): Promise<Comment[]>;
    addComment(comment: CommentPost): Promise<Comment>;
    delete(): Promise<void>;
}
