import { Account } from "../models/account";
import { Rest } from "./rest";
export declare class RestRegister extends Rest {
    create(user: Account): Promise<Account>;
}
