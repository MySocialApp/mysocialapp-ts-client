import { Rest } from "./rest";
import { Account } from "../models/account";
import { LoginCredentials } from "../models/login_credentials";
import { Photo } from "../models/photo";
import { FileData } from "../models/file";
export declare class RestAccount extends Rest {
    get(): Promise<Account>;
    update(acc: Account): Promise<Account>;
    delete(loginCredentials: LoginCredentials): Promise<void>;
    getCover(): Promise<Photo>;
    updateCover(image: FileData): Promise<Photo>;
    getProfilePhoto(): Promise<Photo>;
    updateProfilePhoto(image: FileData): Promise<Photo>;
}
