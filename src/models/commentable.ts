import {CommentPost} from "./comment_post";
import {Comment} from "./comment";

export interface Commentable {
    getComments(): Promise<Comment[]>;

    addComment(comment: CommentPost): Promise<Comment>;

    commentsTotal: number;
    commentsSamples: Comment[];
}