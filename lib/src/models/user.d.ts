import { Photo } from "./photo";
import { Base } from "./base";
import { CustomField } from "./custom_field";
import { UserSettings } from "./user_settings";
export declare class User extends Base {
    private updated_date?;
    private _profile_photo?;
    private _custom_fields?;
    private _user_settings?;
    first_name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    validated_email?: boolean;
    gender?: Gender;
    date_of_birth?: string;
    presentation?: string;
    authorities?: string[];
    account_enabled?: boolean;
    account_expired?: boolean;
    facebook_id?: string;
    facebook_access_token?: string;
    is_friend?: boolean;
    is_requested_as_friend?: boolean;
    external_id?: string;
    profile_photo: Photo;
    user_settings: UserSettings;
    custom_fields: CustomField[];
}
export declare enum Gender {
    Male = "MALE",
    Female = "FEMALE"
}
