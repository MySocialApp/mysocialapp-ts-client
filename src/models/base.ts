import moment = require('moment');
import {Model} from "./model";
import {AccessControl} from "./feed";
import {User} from "./user";
import {Photo} from "./photo";

export class Base extends Model {
    id?: number;
    id_str?: string;
    type?: string;
    created_date: string;
    displayed_name: string;
    _displayed_photo: Photo;
    access_control: AccessControl;
    private _owner?: User;

    set owner(o: User) {
        this._owner = new User(o);
    }

    get owner(): User {
        return this._owner;
    }

    set displayed_photo(o: Photo) {
        this._displayed_photo = new Photo(o);
    }

    get displayed_photo(): Photo {
        return this._displayed_photo;
    }

    get createdDate(): moment.Moment {
        return this.created_date ? moment(this.created_date) : null;
    }
}