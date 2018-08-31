import { Account } from "./models/account";
import { CustomField } from "./models/custom_field";
import { FluentAbstract } from "./fluent_abstract";
import { Photo } from "./models/photo";
import { AccountEvents } from "./models/account_events";
import { FileData } from "./models/file";
export declare class FluentAccount extends FluentAbstract {
    private _account?;
    get(useCache?: boolean): Promise<Account>;
    getAvailableCustomFields(): Promise<CustomField[]>;
    changeProfilePhoto(photo: FileData): Promise<Photo>;
    changeProfileCoverPhoto(photo: FileData): Promise<Photo>;
    requestForDeleteAccount(password: string): Promise<void>;
    getEvents(): Promise<AccountEvents>;
    resetPassword(email: string): Promise<void>;
}
