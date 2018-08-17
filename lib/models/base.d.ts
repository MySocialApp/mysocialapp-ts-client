import moment = require('moment');
import { Model } from "./model";
import { User } from "./user";
import { Photo } from "./photo";
import { AccessControl } from "./access_control";
import { BaseImpl } from "./base_impl";
export declare class Base extends Model implements BaseImpl {
    id_str?: string;
    type?: string;
    created_date: string;
    displayed_name: string;
    _displayed_photo: Photo;
    access_control?: AccessControl;
    body_message?: string;
    body_image_url?: string;
    body_image_text?: string;
    private _owner?;
    id: any;
    owner: User;
    displayed_photo: Photo;
    readonly getCreatedDate: moment.Moment;
    save(): Promise<any>;
    delete(): Promise<any>;
}
