import { Rest } from "./rest";
import { User } from "../models/user";
import { FriendRequests } from "../models/friend_requests";
export declare class RestFriend extends Rest {
    list(page: number, size?: number): Promise<User[]>;
    listRequests(): Promise<FriendRequests>;
}
