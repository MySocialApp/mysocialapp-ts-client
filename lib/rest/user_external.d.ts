import { User } from "../models/user";
export declare class RestUserExternal extends User {
    get(externalId: string): Promise<User>;
}
