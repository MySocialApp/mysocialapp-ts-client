import {User} from "../models/user";

export class RestUserExternal extends User {
    async get(externalId: string): Promise<User> {
        return this.conf.get(new User(), "/user/external/" + externalId) as Promise<User>;
    }
}