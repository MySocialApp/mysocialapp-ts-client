import {Rest} from "./rest";
import {User} from "../models/user";

export class RestAccount extends Rest {
    async get(): Promise<User> {
        return this.conf.get(new User(), '/account') as Promise<User>;
    }
}