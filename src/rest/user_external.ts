import {User} from "../models/user";
import {Rest} from "./rest";

export class RestUserExternal extends Rest {
    async get(externalId: string): Promise<User> {
        return this.conf.get(new User(), "/user/external/" + externalId) as Promise<User>;
    }
}
