import {User} from "./user";
import {UserSettings} from "./user_settings";
import {RestAccount} from "../rest/account";
import {Model} from "./model";

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
        return {
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            living_location: this.living_location ? this.living_location.getJsonParameters() : null,
            custom_fields: Model.listToParameters(this.custom_fields),
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            presentation: this.presentation,
        };
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