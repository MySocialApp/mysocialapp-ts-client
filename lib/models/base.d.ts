import moment = require('moment');
import { Model } from "./model";
import { User } from "./user";
import { Photo } from "./photo";
import { AccessControl } from "./access_control";
import { BaseImpl } from "./base_impl";
export declare class Base extends Model implements BaseImpl {
    private _owner?;
    private _displayed_photo;
    id_str?: string;
    type?: string;
    created_date: string;
    displayed_name: string;
    access_control?: AccessControl;
    body_image_url?: string;
    body_image_text?: string;
    id: any;
    bodyMessage: string;
    owner: User;
    displayed_photo: Photo;
    readonly getCreatedDate: moment.Moment;
    save(): Promise<any>;
    delete(): Promise<any>;
}
