import {Rest} from "./rest";
import {User} from "../models/user";
import {Account} from "../models/account";
import {LoginCredentials} from "../models/login_credentials";
import {Photo} from "../models/photo";

export class RestAccount extends Rest {
    get(): Promise<User> {
        return this.conf.get(new Account(), '/account') as Promise<Account>;
    }

    update(acc: Account): Promise<User> {
        return this.conf.put(new Account(), "/account", acc) as Promise<User>;
    }

    delete(loginCredentials: LoginCredentials): Promise<void> {
        return this.conf.delete("/account", {data: loginCredentials.toJson()}) as Promise<void>;
    }

    getCover(): Promise<Photo> {
        return this.conf.get(new Photo(), "/account/profile/cover/photo") as Promise<Photo>;
    }

    updateCover(image: File): Promise<Photo> {
        let fd = new FormData();
        fd.set("file", image);
        fd.set("file", "image");
        return this.conf.postMultipart(new Photo(), "/account/profile/cover/photo", fd) as Promise<Photo>;
    }

    getProfilePhoto(): Promise<Photo> {
        return this.conf.get(new Photo(), "/account/profile/photo") as Promise<Photo>;
    }

    updateProfilePhoto(image: File): Promise<Photo> {
        let fd = new FormData();
        fd.set("file", image);
        fd.set("file", "image");
        return this.conf.postMultipart(new Photo(), "/account/profile/photo", fd) as Promise<Photo>;
    }


}