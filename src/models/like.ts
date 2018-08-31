import {User} from "./user";
import {Model} from "./model";

export class Like extends Model {
    private _owner?: User;

    id_str?: string;
    type?: string;
    created_date: string;

    get id(): any {
        return this.id_str
    }

    set id(id: any) {
        // int64 cannot be interpreted by browsers
    }

    set owner(o: User) {
        this._owner = new User(o);
    }

    get owner(): User {
        return this._owner;
    }
}