import {User} from "./user";
import {UserSettings} from "./user_settings";
import {RestAccount} from "../rest/account";
import {listToParameters} from "./utils";

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

    getJsonParameters(): {} {
        let data = {
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            presentation: this.presentation,
        };
        if (this.living_location) {
            data['living_location'] = this.living_location.getJsonParameters();
        }
        if (this.password) {
            data['password'] = this.password;
        }
        if (this.custom_fields) {
            data['custom_fields'] = listToParameters(this.custom_fields);
        }
        return data;
    }

    set user_settings(u: UserSettings) {
        this._user_settings = new UserSettings(u, this.conf);
    }

    get user_settings(): UserSettings {
        return this._user_settings;
    }

    async update(): Promise<Account> {
        return (new RestAccount(this.conf)).update(this);
    }
}