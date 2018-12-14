import {Model} from "./model";
import {User} from "./user";

export class Users extends Model {

    total?: number;
    _users?: User[];

    getJsonParameters(): {} {
        return {
            total: this.total
        };
    }

    set users(list: User[]) {
        this._users = [] as User[];
        for (let u of list) {
            this._users.push(new User(u, this.conf));
        }
    }

    get users(): User[] {
        return this._users;
    }

}