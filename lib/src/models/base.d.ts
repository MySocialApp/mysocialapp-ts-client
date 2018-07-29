import moment = require('moment');
import { Model } from "./model";
import { User } from "./user";
import { Photo } from "./photo";
import { AccessControl } from "./access_control";
export declare class Base extends Model {
    id?: number;
    id_str?: string;
    type?: string;
    created_date: string;
    displayed_name: string;
    _displayed_photo: Photo;
    access_control: AccessControl;
    private _owner?;
    owner: User;
    displayed_photo: Photo;
    readonly createdDate: moment.Moment;
}
