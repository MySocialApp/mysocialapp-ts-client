import { User } from "../models/user";
import { Rest } from "./rest";
export declare class RestUserExternal extends Rest {
    get(externalId: string): Promise<User>;
}
