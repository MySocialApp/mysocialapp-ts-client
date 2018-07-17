import {User} from "./user";
import {Base} from "./base";
import {Likable} from "./likable";
import {LikeBlob} from "./like_blob";
import {Like} from "./like";
import {Commentable} from "./commentable";
import {RestFeedLike} from "../rest/feed_like";
import {CommentPost} from "./comment_post";
import {CommentBlob} from "./comment_blob";
import {RestFeedComment} from "../rest/feed_comment";
import {Comment} from "./comment";

export class BaseWall extends Base implements Likable, Commentable {
    id: number;
    id_str: string;
    message: string;
    _likes: LikeBlob;
    owner: User;
    target: BaseWall;

    comments?: CommentBlob;

    set bodyMessage(msg: string) {
        this.message = msg;
    }

    get bodyMessage(): string {
        return this.message;
    }

    set likes(likes: LikeBlob) {
        this._likes = new LikeBlob(likes, this.conf);
    }

    get likes(): LikeBlob {
        return this._likes;
    }

    getLikes(): Promise<Like[]> {
        return (new RestFeedLike(this.conf)).get(this.id_str);
    }

    getLikersTotal(): number {
        return this.likes ? this.likes.total : 0;
    }

    setLikersTotal(i: number) {
        this.likes.total = i;
    }

    isLiked(): boolean {
        return this.likes.hasLike === true;
    }

    addLike(): Promise<Like> {
        return (new RestFeedLike(this.conf)).addLike(this.id_str);
    }

    deleteLike(): Promise<void> {
        return (new RestFeedLike(this.conf)).deleteLike(this.id_str);
    }

    getComments(): Promise<Comment[]> {
        return (new RestFeedComment(this.conf)).list(this.id_str);
    }

    addComment(comment: CommentPost): Promise<Comment> {
        return (new RestFeedComment(this.conf)).add(this.id_str, comment);
    }

    get commentsTotal(): number {
        return this.comments ? this.comments.total : 0;
    }

    get commentsSamples(): Comment[] {
        return this.comments ? this.comments.samples : null;
    }
}