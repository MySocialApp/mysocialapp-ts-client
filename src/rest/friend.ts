import {Rest} from "./rest";
import {User} from "../models/user";
import {FriendRequests} from "../models/friend_requests";

export class RestFriend extends Rest {
    list(page: number, size?: number): Promise<User[]> {
        let params = {page: page, size: size !== undefined ? size : size};
        return this.conf.getList(new User(), "/friend?" + Rest.encodeQueryData(params)) as Promise<User[]>;
    }

    listRequests(): Promise<FriendRequests> {
        return this.conf.get(new FriendRequests(), "/friend/request") as Promise<FriendRequests>;
    }
}