import { Base } from "./base";
import { Likable } from "./likable";
import { LikeBlob } from "./like_blob";
import { Like } from "./like";
import { Commentable } from "./commentable";
import { CommentPost } from "./comment_post";
import { CommentBlob } from "./comment_blob";
import { Comment } from "./comment";
export declare class BaseWall extends Base implements Likable, Commentable {
    private _likes;
    private _comments?;
    comments: CommentBlob;
    likes: LikeBlob;
    getLikersTotal(): number;
    setLikersTotal(i: number): void;
    isLiked(): boolean;
    getLikes(): Promise<Like[]>;
    addLike(): Promise<Like>;
    deleteLike(): Promise<void>;
    getComments(): Promise<Comment[]>;
    addComment(comment: CommentPost): Promise<Comment>;
    delete(): Promise<void>;
    readonly commentsTotal: number;
    readonly commentsSamples: Comment[];
}
