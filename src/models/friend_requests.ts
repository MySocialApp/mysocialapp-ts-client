import {Model} from "./model";
import {User} from "./user";

export class FriendRequests extends Model {
    _incoming: User[];
    _outgoing: User[];

    set incoming(list: User[]) {
        let users: User[];
        for (let u in list) {
            users.push(new User(u));
        }
        this._incoming = users;
    }

    get incoming(): User[] {
        return this._incoming;
    }

    set outgoing(list: User[]) {
        let users: User[];
        for (let u in list) {
            users.push(new User(u));
        }
        this._outgoing = users;
    }

    get outgoing(): User[] {
        return this._outgoing;
    }

}