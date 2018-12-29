import {User} from "./user";
import {UserSettings} from "./user_settings";
import {Gender} from "./gender";
import moment = require('moment');

export declare class Account extends User {
    private _user_settings?;
    password?: string;
    email?: string;
    validated_email?: boolean;
    facebook_id?: string;
    facebook_access_token?: string;
    external_id?: string;
    getJsonParameters(): {};
    user_settings: UserSettings;
    update(): Promise<Account>;
    setEmail(value: string): Account;
    setPassword(value: string): Account;
    setFirstName(value: string): Account;
    setLastName(value: string): Account;
    setExternalId(value: string): Account;
    setPresentation(value: string): Account;
    setGender(value: Gender): Account;
    setDateOfBirth(date: moment.Moment): Account;
}
