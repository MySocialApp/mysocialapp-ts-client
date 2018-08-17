import {Account} from "../models/account";
import {Rest} from "./rest";

export class RestRegister extends Rest {
    async create(user: Account): Promise<Account> {
        return this.conf.post(new Account(), "/register", user) as Promise<Account>;
    }
}