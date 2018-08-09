import {User} from "./user";
import {Flag} from "./flag";
import {UserSettings} from "./user_settings";

export class Account extends User {
    private _user_settings?: UserSettings;

    password?: string;
    email?: string;

    account_enabled?: boolean;
    account_expired?: boolean;
    validated_email?: boolean;
    facebook_id?: string;
    facebook_access_token?: string;
    external_id?: string;


    set user_settings(u: UserSettings) {
        this._user_settings = new UserSettings(u, this.conf);
    }

    get user_settings(): UserSettings {
        return this._user_settings;
    }
}