import { Rest } from "./rest";
import { User } from "../models/user";
export declare class RestAccount extends Rest {
    get(): Promise<User>;
}
