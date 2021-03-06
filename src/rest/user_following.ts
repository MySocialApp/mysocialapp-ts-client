import {Rest} from "./rest";
import {User} from "../models/user";
import {Empty} from "../models/empty";

export class RestUserFollowing extends Rest {
    async list(userId: string, page: number, size: number, params?: {}): Promise<User[]> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['size'] = size;
        let path = Rest.params("/user/{userId}/following?", {userId: userId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new User(), path) as Promise<User[]>;
    }

    async create(userId: string): Promise<User> {
        return this.conf.post(new User(), Rest.params("/user/{userId}/following?", {userId: userId}), new Empty()) as Promise<User>;
    }

    async delete(userId: string): Promise<void> {
        return this.conf.deleteVoid(Rest.params("/user/{userId}/following?", {userId: userId}));
    }
}
