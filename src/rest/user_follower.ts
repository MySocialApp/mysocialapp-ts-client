import {Rest} from "./rest";
import {User} from "../models/user";

export class RestUserFollower extends Rest {
    async list(userId: string, page: number, size: number, params?: {}): Promise<User[]> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['size'] = size;
        let path = Rest.params("/user/{userId}/follower?", {userId: userId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new User(), path) as Promise<User[]>;
    }
}