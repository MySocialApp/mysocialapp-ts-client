import {Base} from "./base";
import {Likable} from "./likable";
import {LikeBlob} from "./like_blob";
import {Like} from "./like";
import {Commentable} from "./commentable";
import {RestFeed} from "../rest/feed";
import {RestFeedLike} from "../rest/feed_like";
import {CommentPost} from "./comment_post";
import {CommentBlob} from "./comment_blob";
import {RestFeedComment} from "../rest/feed_comment";
import {Comment} from "./comment";

export class BaseWall extends Base implements Likable, Commentable {
    private _likes: LikeBlob;
    private _comments?: CommentBlob;

    get comments(): CommentBlob {
        return this._comments;
    }

    set comments(c: CommentBlob) {
        this._comments = new CommentBlob(c, this.conf);
    }

    set likes(likes: LikeBlob) {
        this._likes = new LikeBlob(likes, this.conf);
    }

    get likes(): LikeBlob {
        return this._likes;
    }

    async getLikes(): Promise<Like[]> {
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

    async addLike(): Promise<Like> {
        return (new RestFeedLike(this.conf)).create(this.id_str);
    }

    async deleteLike(): Promise<void> {
        return (new RestFeedLike(this.conf)).delete(this.id_str);
    }

    async getComments(): Promise<Comment[]> {
        return (new RestFeedComment(this.conf)).list(this.id_str);
    }

    async addComment(comment: CommentPost): Promise<Comment> {
        return (new RestFeedComment(this.conf)).create(this.id_str, comment);
    }

    async delete(): void {
        return (new RestFeed(this.conf)).delete(this.id_str);
    }

    get commentsTotal(): number {
        return this.comments ? this.comments.total : 0;
    }

    get commentsSamples(): Comment[] {
        return this.comments ? this.comments.samples : null;
    }
}