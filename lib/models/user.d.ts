import { Photo } from "./photo";
import { CustomField } from "./custom_field";
import { Status } from "./status";
import { Location } from "./location";
import { Flag } from "./flag";
import { Model } from "./model";
export declare class User extends Model {
    private _profile_photo?;
    private _custom_fields?;
    private _living_location;
    private _current_status;
    private _flag;
    private _user_stat;
    private _displayed_photo;
    id_str?: string;
    type?: string;
    displayed_name: string;
    updated_date?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    gender?: Gender;
    date_of_birth?: string;
    presentation?: string;
    authorities?: string[];
    is_friend?: boolean;
    is_requested_as_friend?: boolean;
    getJsonParameters(): {};
    id: any;
    displayed_photo: Photo;
    profile_photo: Photo;
    flag: Flag;
    living_location: Location;
    current_status: Status;
    custom_fields: CustomField[];
}
export declare enum Gender {
    Male = "MALE",
    Female = "FEMALE"
}
