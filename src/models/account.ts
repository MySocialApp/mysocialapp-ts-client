import {User} from "./user";
import {UserSettings} from "./user_settings";
import {RestAccount} from "../rest/account";
import {listToParameters} from "./utils";
import {Gender} from "./gender";
import {apiDateFormat} from "../constant";
import moment = require('moment');

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
            id: this.id,
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            presentation: this.presentation,
            external_id: this.external_id,
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
        if (this.id) {
            data['id'] = this.id;
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

    setEmail(value: string): Account {
        this.email = value;
        return this;
    }

    setPassword(value: string): Account {
        this.password = value;
        return this;
    }

    setFirstName(value: string): Account {
        this.first_name = value;
        return this;
    }

    setLastName(value: string): Account {
        this.last_name = value;
        return this;
    }

    setExternalId(value: string): Account {
        this.external_id = value;
        return this;
    }

    setGender(value: Gender): Account {
        this.gender = value;
        return this;
    }

    setDateOfBirth(date: moment.Moment): Account {
        this.date_of_birth = date.format(apiDateFormat);
        return this;
    }
}