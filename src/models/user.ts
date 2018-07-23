import {Photo} from "./photo";
import {Base} from "./base";
import {CustomField} from "./custom_field";
import {UserSettings} from "./user_settings";

export class User extends Base {
    private updated_date?: string;
    private _profile_photo?: Photo;
    private _custom_fields?: CustomField[] = [];
    //private living_location: Location; TODO
    //private currentStatus: Status; TODO
    // private _flag: Flag; TODO
    private _user_settings?: UserSettings;
    // private user_stat: UserStat; TODO
    first_name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    validated_email?: boolean;
    gender?: Gender;
    date_of_birth?: string;
    presentation?: string;
    authorities?: string[]; // TODO
    account_enabled?: boolean;
    account_expired?: boolean;
    facebook_id?: string;
    facebook_access_token?: string;
    is_friend?: boolean;
    is_requested_as_friend?: boolean;
    external_id?: string;

    set profile_photo(p: Photo) {
        this._profile_photo = p;
    }

    get profile_photo(): Photo {
        return this._profile_photo;
    }

    set user_settings(u: UserSettings) {
        this._user_settings = new UserSettings(u, this.conf);
    }

    get user_settings(): UserSettings {
        return this._user_settings;
    }

    set custom_fields(list: CustomField[]) {
        this._custom_fields = [] as CustomField[];
        for (let c of list) {
            this._custom_fields.push(new CustomField(c, this.conf));
        }
    }

    get custom_fields(): CustomField[] {
        return this._custom_fields;
    }
}

export enum Gender {
    Male = "MALE",
    Female = "FEMALE",
}