import { User } from "./user";
import { UserSettings } from "./user_settings";
export declare class Account extends User {
    private _user_settings?;
    password?: string;
    email?: string;
    account_enabled?: boolean;
    account_expired?: boolean;
    validated_email?: boolean;
    facebook_id?: string;
    facebook_access_token?: string;
    external_id?: string;
    getJsonParameters(): {};
    user_settings: UserSettings;
    update(): Promise<Account>;
}
