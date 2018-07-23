import {Session} from "./session";
import {User} from "./models/user";
import {CustomField} from "./models/custom_field";

export class FluentAccount {
    private session: Session;
    private account?: User;

    constructor(session: Session) {
        this.session = session;
    }

    async get(useCache?: boolean): Promise<User> {
        try {
            if (useCache && this.account !== undefined) {
                return this.account;
            }
            const resp = await this.session.clientService.account.get();
            this.account = resp;
            return resp;
        }
        catch (err) {
            return err
        }
    }

    async getAvailableCustomFields(): Promise<CustomField[]> {
        const acc = await this.get();
        return acc.custom_fields;
    }
}