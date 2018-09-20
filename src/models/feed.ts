import {Model} from "./model";
import {User} from "./user";
import {BaseWall} from "./base_wall";
import {AccessControl} from "./access_control";
import {Wallable} from "./wallable";
import {RestFeed} from "../rest/feed";
import {Like} from "./like";
import {CommentPost} from "./comment_post";
import {Comment} from "./comment";
import moment = require('moment');

export enum ActionType {
    Publish = 'PUBLISH',

}

export class Feed extends Model implements Wallable {
    action?: string = ActionType.Publish;
    access_control?: AccessControl.Private | AccessControl.Friend | AccessControl.Public;
    summary?: string;
    private _actor: User;
    private _object: BaseWall;
    private _target: BaseWall;

    set id(v: string) {

    }

    get id(): string {
        return this.object ? this.object.id : null;
    }

    set target(o: BaseWall) {
        this._target = new BaseWall(o, this.conf);
    }

    get target(): BaseWall {
        return this._target;
    }

    set object(o: BaseWall) {
        this._object = new BaseWall(o, this.conf);
    }

    get object(): BaseWall {
        return this._object;
    }

    set actor(o: User) {
        this._actor = new User(o, this.conf);
    }

    get actor(): User {
        return this._actor;
    }

    get created_date(): string {
        return this.object.created_date;
    }

    set created_date(s: string) {
    }

    get createdDate(): moment.Moment {
        return this.object ? this.object.getCreatedDate : null;
    }

    get bodyMessage(): string {
        return this.object.bodyMessage ? this.object.bodyMessage : '';
    }

    async addLike(): Promise<Like> {
        return this.object.addLike();
    }

    async getLikes(): Promise<Like[]> {
        return this.object.getLikes();
    }

    async deleteLike(): Promise<void> {
        return this.object.deleteLike();
    }

    async addComment(comment: CommentPost): Promise<Comment> {
        return this.object.addComment(comment);
    }

    async getComments(): Promise<Comment[]> {
        return this.object.getComments();
    }

    async abuse(): Promise<void> {
        return (new RestFeed(this.conf)).abuse(this.object.id);
    }

    async ignore(): Promise<void> {
        return (new RestFeed(this.conf)).ignore(this.object.id);
    }

    async delete(): Promise<void> {
        return (new RestFeed(this.conf)).delete(this.object.id);
    }
}