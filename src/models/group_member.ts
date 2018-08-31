import {Group} from "./group";
import {GroupStatus} from "./group_status";
import {Model} from "./model";
import {User} from "./user";

export class GroupMember extends Model{
    created_date?: string;
    updated_date?: string;
    status?: GroupStatus;

    private _group?: Group;
    private _user?: User;

    get group(): Group {
        return this._group;
    }

    set group(g: Group) {
        this._group = new Group(g, this.conf);
    }

    get user(): User {
        return this._user;
    }

    set user(g: User) {
        this._user = new User(g, this.conf);
    }
}