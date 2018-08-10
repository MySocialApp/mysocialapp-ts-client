import {User} from "./models/user";
import {CustomField} from "./models/custom_field";
import {FluentAbstract} from "./fluent_abstract";
import {Photo} from "./models/photo";
import {LoginCredentials} from "./models/login_credentials";

export class FluentAccount extends FluentAbstract {
    account?: User;

    async get(useCache?: boolean): Promise<User> {
        if (useCache && this.account !== undefined) {
            return this.account;
        }
        const resp = await this.session.clientService.account.get();
        this.account = resp;
        return resp;
    }

    async getAvailableCustomFields(): Promise<CustomField[]> {
        const acc = await this.get();
        return acc.custom_fields;
    }

    async changeProfilePhoto(photo: File): Promise<Photo> {
        return this.session.clientService.account.updateProfilePhoto(photo);
    }

    async changeProfileCoverPhoto(photo: File): Promise<Photo> {
        return this.session.clientService.account.updateCover(photo);
    }

    async requestForDeleteAccount(password: string): Promise<void> {
        return this.session.clientService.account.delete(new LoginCredentials({password: password}))
    }
}