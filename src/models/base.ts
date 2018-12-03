import moment = require('moment');
import {Model} from "./model";
import {User} from "./user";
import {Photo} from "./photo";
import {AccessControl} from "./access_control";
import {BaseImpl} from "./base_impl";

export class Base extends Model implements BaseImpl {
    private _owner?: User;
    private _displayed_photo: Photo;

    id_str?: string;
    type?: string;
    created_date: string;
    displayed_name: string;
    access_control?: AccessControl;
    body_image_url?: string = null;
    body_image_text?: string = null;
    payload?: {};

    get id(): any {
        return this.id_str
    }

    set id(id: any) {
        // int64 cannot be interpreted by browsers
    }

    get bodyMessage(): string {
        return this.displayed_name;
    }

    set bodyMessage(value: string) {
        this.displayed_name = value;
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

    get getCreatedDate(): moment.Moment {
        return this.created_date ? moment(this.created_date) : null;
    }

    // must be override
    async save(): Promise<any> {
        return new Promise(((resolve, reject) => {
            reject()
        }));
    }

    // must be override
    async delete(): Promise<any> {
        return new Promise(((resolve, reject) => {
            reject()
        }));
    }

    setPayload(payload: {}) {
        if (payload) {
            this.payload = payload;
        }
        return this;
    }

    getPayload(): {} {
        return this.payload;
    }

    getPayloadValue(index: string): any {
        return this.getPayload() ? this.getPayload()[index] : null;
    }
}