import {Rest} from "./rest";
import {User} from "../models/user";
import {UserStat} from "../models/user_stat";

export class RestUserStat extends Rest {
    async get(userId: string, params?: {}): Promise<UserStat> {
        params = params !== undefined ? params : {};
        let path = Rest.params("/user/{id}/stat?", {id: userId}) + Rest.encodeQueryData(params);
        return this.conf.get(new User(), path) as Promise<UserStat>;
    }
}