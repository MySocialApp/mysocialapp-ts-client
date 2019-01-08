import {FluentAbstract} from "./fluent_abstract";
import {User} from "./models/user";

export declare class FluentFollow extends FluentAbstract {
    listFollowers(page: number, size?: number): Promise<User[]>;

    listFollowings(page: number, size?: number): Promise<User[]>;
}
