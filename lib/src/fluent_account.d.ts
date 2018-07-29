import { Session } from "./session";
import { User } from "./models/user";
import { CustomField } from "./models/custom_field";
export declare class FluentAccount {
    private session;
    account?: User;
    constructor(session: Session);
    get(useCache?: boolean): Promise<User>;
    getAvailableCustomFields(): Promise<CustomField[]>;
}
