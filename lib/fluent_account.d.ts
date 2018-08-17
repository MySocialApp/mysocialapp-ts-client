import { Account } from "./models/account";
import { CustomField } from "./models/custom_field";
import { FluentAbstract } from "./fluent_abstract";
import { Photo } from "./models/photo";
import { AccountEvents } from "./models/account_events";
export declare class FluentAccount extends FluentAbstract {
    account?: Account;
    get(useCache?: boolean): Promise<Account>;
    getAvailableCustomFields(): Promise<CustomField[]>;
    changeProfilePhoto(photo: File): Promise<Photo>;
    changeProfileCoverPhoto(photo: File): Promise<Photo>;
    requestForDeleteAccount(password: string): Promise<void>;
    getEvents(): Promise<AccountEvents>;
    resetPassword(email: string): Promise<void>;
}
