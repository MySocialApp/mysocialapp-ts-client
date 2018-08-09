import { Photo } from "./photo";
import { Base } from "./base";
import { CustomField } from "./custom_field";
import { Status } from "./status";
import { Flag } from "./flag";
import { Location } from "./location";
export declare class User extends Base {
    private _profile_photo?;
    private _custom_fields?;
    private _living_location;
    private _current_status;
    private _flag;
    private _user_stat;
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
