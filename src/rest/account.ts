import {Rest} from "./rest";
import {Account} from "../models/account";
import {LoginCredentials} from "../models/login_credentials";
import {Photo} from "../models/photo";
import {FileData} from "../models/file";
import {GenericFormData} from "../models/generic_form_data";

export class RestAccount extends Rest {
    async get(): Promise<Account> {
        return this.conf.get(new Account(), '/account') as Promise<Account>;
    }

    async update(acc: Account): Promise<Account> {
        return this.conf.put(new Account(), "/account", acc) as Promise<Account>;
    }

    async delete(loginCredentials: LoginCredentials): Promise<void> {
        return this.conf.delete("/account", {data: loginCredentials.toJson()}) as Promise<void>;
    }

    async getCover(): Promise<Photo> {
        return this.conf.get(new Photo(), "/account/profile/cover/photo") as Promise<Photo>;
    }

    async updateCover(image: FileData): Promise<Photo> {
        let fd = new GenericFormData();
        fd.set("file", image.blob, 'image/png', "image.png");
        return this.conf.postMultipart(new Photo(), "/account/profile/cover/photo", fd) as Promise<Photo>;
    }

    async getProfilePhoto(): Promise<Photo> {
        return this.conf.get(new Photo(), "/account/profile/photo") as Promise<Photo>;
    }

    async updateProfilePhoto(image: FileData): Promise<Photo> {
        let fd = new GenericFormData();
        fd.set("file", image.blob, 'image/png', "image.png");
        return this.conf.postMultipart(new Photo(), "/account/profile/photo", fd) as Promise<Photo>;
    }


}