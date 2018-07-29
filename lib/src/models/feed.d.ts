import { Model } from "./model";
import { User } from "./user";
import { BaseWall } from "./base_wall";
import moment = require('moment');
import { AccessControl } from "./access_control";
export declare enum ActionType {
    Publish = "PUBLISH"
}
export declare class Feed extends Model {
    action?: string;
    access_control?: AccessControl.Private | AccessControl.Friend | AccessControl.Public;
    summary?: string;
    private _actor;
    private _object;
    private _target;
    target: BaseWall;
    object: BaseWall;
    actor: User;
    readonly createdDate: moment.Moment;
    readonly bodyMessage: string;
}
