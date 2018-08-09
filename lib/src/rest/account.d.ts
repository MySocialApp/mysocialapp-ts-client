import { Rest } from "./rest";
import { User } from "../models/user";
import { Account } from "../models/account";
import { LoginCredentials } from "../models/login_credentials";
import { Photo } from "../models/photo";
export declare class RestAccount extends Rest {
    get(): Promise<User>;
    update(acc: Account): Promise<User>;
    delete(loginCredentials: LoginCredentials): Promise<void>;
    getCover(): Promise<Photo>;
    updateCover(image: File): Promise<Photo>;
    getProfilePhoto(): Promise<Photo>;
    updateProfilePhoto(image: File): Promise<Photo>;
}
