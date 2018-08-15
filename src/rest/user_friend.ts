import {Rest} from "./rest";
import {User} from "../models/user";
import {Empty} from "../models/empty";

export class RestUserFriend extends Rest {
    async list(userId: string, page: number, size: number, params?: {}): User[] {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['size'] = size;
        let path = Rest.params("/user/{userId}/friend?", {userId: userId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new User(), path) as Promise<User[]>;
    }

    async create(userId: string): User {
        return this.conf.post(new User(), Rest.params("/user/{userId}/friend?", {userId: userId}), new Empty()) as Promise<User>;
    }

    async delete(userId: string): void {
        return this.conf.delete(Rest.params("/user/{userId}/friend?", {userId: userId}));
    }
}