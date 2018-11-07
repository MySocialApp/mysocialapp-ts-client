import { Model } from "./model";
import { User } from "./user";
import { BaseWall } from "./base_wall";
import { AccessControl } from "./access_control";
import { Wallable } from "./wallable";
import { Like } from "./like";
import { CommentPost } from "./comment_post";
import { Comment } from "./comment";
import moment = require('moment');
export declare enum ActionType {
    Publish = "PUBLISH"
}
export declare class Feed extends Model implements Wallable {
    type: string;
    action?: string;
    access_control?: AccessControl.Private | AccessControl.Friend | AccessControl.Public;
    summary?: string;
    private _actor;
    private _object;
    private _target;
    id: string;
    target: BaseWall;
    object: BaseWall;
    actor: User;
    created_date: string;
    readonly createdDate: moment.Moment;
    readonly bodyMessage: string;
    readonly bodyImageUrl: string;
    readonly bodyImageText: string;
    addLike(): Promise<Like>;
    getLikes(): Promise<Like[]>;
    deleteLike(): Promise<void>;
    addComment(comment: CommentPost): Promise<Comment>;
    getComments(): Promise<Comment[]>;
    abuse(): Promise<void>;
    ignore(): Promise<void>;
    delete(): Promise<void>;
    save(): Promise<Feed>;
    setBodyMessage(message: string): Feed;
    setAccessControl(ac: AccessControl): Feed;
}
