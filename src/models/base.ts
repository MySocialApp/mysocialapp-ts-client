import moment = require('moment');
import {Model} from "./model";
import {User} from "./user";
import {Photo} from "./photo";
import {AccessControl} from "./access_control";
import {BaseImpl} from "./base_impl";

export class Base extends Model implements BaseImpl{
    id_str?: string;
    type?: string;
    created_date: string;
    displayed_name: string;
    _displayed_photo: Photo;
    access_control?: AccessControl;
    body_message?: string;
    body_image_url?: string = null;
    body_image_text?: string = null;
    private _owner?: User;

    get id(): any{
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

    set displayed_photo(o: Photo) {
        this._displayed_photo = new Photo(o);
    }

    get displayed_photo(): Photo {
        return this._displayed_photo;
    }

    get createdDate(): moment.Moment {
        return this.created_date ? moment(this.created_date) : null;
    }

    // must be override
    save(): Promise<any> {
        return new Promise(((resolve, reject) => {
            reject()
        }));
    }

    // must be override
    delete(): Promise<any> {
        return new Promise(((resolve, reject) => {
            reject()
        }));
    }
}