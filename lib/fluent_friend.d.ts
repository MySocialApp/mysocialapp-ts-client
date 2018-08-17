import { FluentAbstract } from "./fluent_abstract";
import { User } from "./models/user";
export declare class FluentFriend extends FluentAbstract {
    list(page: number, size?: number): Promise<User[]>;
    listIncomingFriendRequests(): Promise<User[]>;
    listOutgoingFriendRequests(): Promise<User[]>;
}
