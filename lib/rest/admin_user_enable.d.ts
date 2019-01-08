import {Rest} from "./rest";
import {User} from "../models/user";

export declare class RestAdminUserEnable extends Rest {
    enable(userId: string): Promise<User>;

    disable(userId: string): Promise<User>;
}
