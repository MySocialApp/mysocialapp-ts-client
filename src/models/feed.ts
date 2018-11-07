import {Model} from "./model";
import {User} from "./user";
import {BaseWall} from "./base_wall";
import {AccessControl} from "./access_control";
import {Wallable} from "./wallable";
import {RestFeed} from "../rest/feed";
import {Like} from "./like";
import {CommentPost} from "./comment_post";
import {Comment} from "./comment";
import {TextWallMessage} from "./text_wall_message";
import moment = require('moment');
import {convertModel} from "./convert";

export enum ActionType {
    Publish = 'PUBLISH',

}

export class Feed extends Model implements Wallable {
    type: string;
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
        this._target = convertModel(o, this.conf) as BaseWall;
    }

    get target(): BaseWall {
        return this._target;
    }

    set object(o: BaseWall) {
        this._object = convertModel(o, this.conf) as BaseWall;
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

    get bodyImageUrl(): string {
        return this.object.body_image_url;
    }

    get bodyImageText(): string {
        return this.object.body_image_text;
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

    async save(): Promise<Feed> {
        let wm = new TextWallMessage().setMessage(this.object.displayed_name).setVisibility(this.access_control);
        return (new RestFeed(this.conf)).updateMessage(this.object.id, wm)
    }

    setBodyMessage(message: string): Feed {
        if (this.object && this.object.bodyMessage) {
            this.object.bodyMessage = message;
        }
        return this;
    }

    setAccessControl(ac: AccessControl): Feed {
        if (this.object) {
            this.access_control = ac;
        }
        return this;
    }
}