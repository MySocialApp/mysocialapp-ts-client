import {Model} from "./model";
import {User} from "./user";
import {BaseWall} from "./base_wall";
import moment = require('moment');
import {AccessControl} from "./access_control";

export enum ActionType {
    Publish = 'PUBLISH',

}

export class Feed extends Model {
    action?: string = ActionType.Publish;
    access_control?: AccessControl.Private | AccessControl.Friend | AccessControl.Public;
    summary?: string;
    private _actor: User;
    private _object: BaseWall;
    private _target: BaseWall;

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

    get createdDate(): moment.Moment {
        return this.object ? this.object.createdDate : null;
    }

    get bodyMessage(): string {
        return this.object.bodyMessage ? this.object.bodyMessage : '';
    }
}