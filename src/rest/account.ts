import {Rest} from "./rest";
import {User} from "../models/user";
import {Account} from "../models/account";
import {LoginCredentials} from "../models/login_credentials";
import {Photo} from "../models/photo";

export class RestAccount extends Rest {
    async get(): User {
        return this.conf.get(new Account(), '/account') as Promise<Account>;
    }

    async update(acc: Account): User {
        return this.conf.put(new Account(), "/account", acc) as Promise<User>;
    }

    async delete(loginCredentials: LoginCredentials): void {
        return this.conf.delete("/account", {data: loginCredentials.toJson()}) as Promise<void>;
    }

    async getCover(): Photo {
        return this.conf.get(new Photo(), "/account/profile/cover/photo") as Promise<Photo>;
    }

    async updateCover(image: File): Photo {
        let fd = new FormData();
        fd.set("file", image);
        fd.set("file", "image");
        return this.conf.postMultipart(new Photo(), "/account/profile/cover/photo", fd) as Promise<Photo>;
    }

    async getProfilePhoto(): Photo {
        return this.conf.get(new Photo(), "/account/profile/photo") as Promise<Photo>;
    }

    async updateProfilePhoto(image: File): Photo {
        let fd = new FormData();
        fd.set("file", image);
        fd.set("file", "image");
        return this.conf.postMultipart(new Photo(), "/account/profile/photo", fd) as Promise<Photo>;
    }


}