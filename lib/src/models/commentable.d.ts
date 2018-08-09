import { CommentPost } from "./comment_post";
import { Comment } from "./comment";
import { BaseImpl } from "./base_impl";
export interface Commentable extends BaseImpl {
    getComments(): Promise<Comment[]>;
    addComment(comment: CommentPost): Promise<Comment>;
    commentsTotal: number;
    commentsSamples: Comment[];
}
